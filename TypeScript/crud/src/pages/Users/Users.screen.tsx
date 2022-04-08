import { useEffect, useContext } from "react";
import { PersonContext } from "../../context/PersonContext";
import api from '../../service/api'

import { useFormik } from "formik";
import { UserDTO } from "../../model/PersonDTO";

import List from './List'
import { TitlePage, LabelForm } from '../../global.style'
import { ContainerPage, TablePersons, ContainerList, FormUser, GridInputs, DivInput, InputForm, ButtonSend } from './Users.style';
const Users = () => {

  const { getPersons, persons } = useContext<any>(PersonContext);
  const hasToken = localStorage.getItem("token");

  useEffect( () => {
    if (hasToken) {
      api.defaults.headers.common["Authorization"] = hasToken;
    }
    getPersons();
  },[]);

  const createNewPerson = async (values: UserDTO) => {
    console.log(values);
    try {
      const {data} = await api.post('/pessoa', values);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

    getPersons();
  }

  const formikProps = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cpf: "",
      dataNascimento: ""
    },
    onSubmit: values => {
      createNewPerson(values);
    },
  });
    
  return (
    <ContainerPage>
      <FormUser onSubmit={formikProps.handleSubmit}>
        <GridInputs>
          <DivInput>
            <LabelForm>Nome</LabelForm>
            <InputForm id="nome" name="nome" placeholder="Digite seu nome" value={formikProps.values.nome} onChange={formikProps.handleChange} />
          </DivInput>

          <DivInput>
            <LabelForm>E-mail</LabelForm>
            <InputForm id="email" name="email" placeholder="Digite seu E-mail" value={formikProps.values.email} onChange={formikProps.handleChange} />
          </DivInput>

          <DivInput>
            <LabelForm>CPF</LabelForm>
            <InputForm id="cpf" name="cpf" placeholder="Digite seu Cpf" value={formikProps.values.cpf} onChange={formikProps.handleChange} />
          </DivInput>

          <DivInput>
            <LabelForm>Data de Nascimento</LabelForm>
            <InputForm id="dataNascimento" name="dataNascimento" placeholder="Digite seu Data de Nascimento" value={formikProps.values.dataNascimento} onChange={formikProps.handleChange} />
          </DivInput>
        </GridInputs>
        <ButtonSend type="submit"> Cadastrar Pessoa </ButtonSend>
      </FormUser>
      <TitlePage> Persons </TitlePage>
      <ContainerList>
        <TablePersons>
          <span>Nome</span>
          <span>Aniverásario</span>
          <span>Cpf</span>
          <span>E-mail</span>
          <span> Atualizar </span>
          <span> Deletar </span>
        </TablePersons>
        <List persons={persons}/>
      </ContainerList>
    </ContainerPage>
  )
}

export default Users;