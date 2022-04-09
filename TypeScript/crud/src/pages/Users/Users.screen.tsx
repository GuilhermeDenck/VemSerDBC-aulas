import { useEffect, useContext } from "react";
import { PersonContext } from "../../context/PersonContext";

import Notiflix from "notiflix";
import moment from "moment";
import api from '../../service/api';
import * as Yup from "yup";
import InputMask from "react-input-mask";

import { useFormik } from "formik";
import { UserDTO } from "../../model/PersonDTO";

import List from './List'
import { TitlePage, LabelForm, DivError } from '../../global.style'
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

    const cpf = values.cpf.replace(/\D/g, '');
    const birthDate = moment(values.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD");
    
    const PersonObj = {
      nome: values.nome,
      email: values.email,
      cpf: cpf,
      dataNascimento: birthDate,
    }

    console.log(PersonObj);

    try {
      const {data} = await api.post('/pessoa', PersonObj);

      Notiflix.Notify.success("Usuário adiciondo com sucesso!");
    } catch (error) {
      Notiflix.Notify.failure(
        "Ocorreu um erro ao adicionar o usuário tente novamente!"
      );
      console.log(error);
    }

    getPersons();
  }

  // const SignupSchema = Yup.object({
  //   nome: Yup.string()
  //     .min(3, "Nome deve ter no mínimo 3 caracteres")
  //     .required("O nome é obrigatório"),
  //   email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
  //   cpf: Yup.string().required("O CPF é obrigatório"),
  //   dataNascimento: Yup.string().required("A data de nascimento é obrigatória"),
  // });

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
            <InputForm id="cpf" name="cpf" as={InputMask} mask="999.999.999-99" placeholder="Digite seu Cpf" value={formikProps.values.cpf} onChange={formikProps.handleChange} />
          </DivInput>

          <DivInput>
            <LabelForm>Data de Nascimento</LabelForm>
            <InputForm id="dataNascimento" as={InputMask} mask="99/99/9999" name="dataNascimento" placeholder="Digite seu Data de Nascimento" value={formikProps.values.dataNascimento} onChange={formikProps.handleChange} />
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