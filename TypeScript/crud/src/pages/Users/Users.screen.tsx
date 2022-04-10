import { useEffect, useContext, useState } from "react";
import { PersonContext } from "../../context/PersonContext";

import Notiflix from "notiflix";
import moment from "moment";
import api from '../../service/api';
import * as Yup from "yup";
import InputMask from "react-input-mask";

import { useFormik } from "formik";
import { UserDTO } from "../../model/PersonDTO";

import BtnUpdate from '../../images/btnUpdate.svg';
import BtnDelete from '../../images/btnDelete.svg';
import { ButtonOptions } from '../../components';

import { TitlePage, LabelForm, DivError } from '../../global.style'
import { ContainerPage, TablePersons, ContainerList, FormUser, GridInputs, DivInput, InputForm, ButtonSend, ListPersons } from './Users.style';
const Users = () => {

  const { getPersons, persons, deletePerson } = useContext<any>(PersonContext);
  const hasToken = localStorage.getItem("token");

  const [ update, setUpdate ] = useState(false);
  const [ id, setId ] = useState<number>(0);

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

    try {
      const {data} = await api.post('/pessoa', PersonObj);

      Notiflix.Notify.success("Usuário adiciondo com sucesso!");
    } catch (error) {
      Notiflix.Notify.failure(
        "Ocorreu um erro ao adicionar o usuário tente novamente!"
      );
      console.log(error);
    }

    formikProps.resetForm();
    getPersons();
  }

  const maskCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  const alterPerson = async (id: number, formikProps: any) => {
    try {
      const { data } = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`);
      setId(id);
      setUpdate(true);
      formikProps.setFieldValue('nome', data.nome);
      formikProps.setFieldValue('email', data.email);
      formikProps.setFieldValue('cpf', maskCPF(data.cpf));
      formikProps.setFieldValue('dataNascimento', moment(data.dataNascimento).format("DD/MM/YYYY"));
    } catch (error) {
      console.log(error);
    }
  }

  const updatePerson = async (values: UserDTO) => {
    const cpf = values.cpf.replace(/\D/g, '');
    const birthDate = moment(values.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD");
    
    const PersonObj = {
      idPessoa: id,
      nome: values.nome,
      email: values.email,
      cpf: cpf,
      dataNascimento: birthDate,
    }

    try {
      const {data} = await api.put(`/pessoa/${id}`, PersonObj);

      Notiflix.Notify.success("Usuário alterado com sucesso!");
    } catch (error) {
      Notiflix.Notify.failure(
        "Ocorreu um erro ao alterar o usuário tente novamente!"
      );
      console.log(error);
    }

    formikProps.resetForm();
    getPersons();
    setUpdate(false);
  }

  const msgRequired = 'Você precisa preencher esse campo';
  const formikProps = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cpf: "",
      dataNascimento: ""
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(2, "muito curto")
        .max(50, "muito extenso")
        .required(msgRequired),
      email: Yup.string()
        .email("Este campo precisa ser um email.")
        .required(msgRequired),
      cpf: Yup.string().required(msgRequired),
      dataNascimento: Yup.string().required(msgRequired),
    }),
    onSubmit: values => {
      if(update) {
        updatePerson(values);
      } else {
        createNewPerson(values);  
      } 
    },
  });
    
  return (
    <ContainerPage>
      <FormUser onSubmit={formikProps.handleSubmit}>
        <GridInputs>
          <DivInput>
            <LabelForm>Nome</LabelForm>
            <InputForm id="nome" name="nome" placeholder="Digite seu nome" value={formikProps.values.nome} onChange={formikProps.handleChange} />
            {formikProps.errors.nome && formikProps.touched.nome ? ( <DivError>{formikProps.errors.nome}</DivError> ) : null}
          </DivInput>

          <DivInput>
            <LabelForm>E-mail</LabelForm>
            <InputForm id="email" name="email" placeholder="Digite seu E-mail" value={formikProps.values.email} onChange={formikProps.handleChange} />
            {formikProps.errors.email && formikProps.touched.email ? ( <DivError>{formikProps.errors.email}</DivError> ) : null}
          </DivInput>

          <DivInput>
            <LabelForm>CPF</LabelForm>
            <InputForm id="cpf" name="cpf" as={InputMask} mask="999.999.999-99" placeholder="Digite seu Cpf" value={formikProps.values.cpf} onChange={formikProps.handleChange} />
            {formikProps.errors.cpf && formikProps.touched.cpf ? ( <DivError>{formikProps.errors.cpf}</DivError> ) : null}
          </DivInput>

          <DivInput>
            <LabelForm>Data de Nascimento</LabelForm>
            <InputForm id="dataNascimento" as={InputMask} mask="99/99/9999" name="dataNascimento" placeholder="Digite seu Data de Nascimento" value={formikProps.values.dataNascimento} onChange={formikProps.handleChange} />
            {formikProps.errors.dataNascimento && formikProps.touched.dataNascimento ? ( <DivError>{formikProps.errors.dataNascimento}</DivError> ) : null}
          </DivInput>
        </GridInputs>
        <ButtonSend type="submit"> { update ? 'Alterar Pessoa' : 'Cadastrar Pessoa' }  </ButtonSend>
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
        {
          persons.map( (p: any) => (
            <ListPersons key={p.idPessoa}>
                <p> {p.nome} </p>
                <p> {moment(p.dataNascimento).format('DD/MM/YYYY')} </p>
                <p> {maskCPF(p.cpf)} </p>
                <p> {p.email} </p>
                <ButtonOptions onClick={ () => alterPerson(p.idPessoa, formikProps) } color={'#FEC400'} img={BtnUpdate} text={'botão para alterar'} />
                <ButtonOptions onClick={ () => deletePerson(p.idPessoa) } color={'#F12B2C'} img={BtnDelete} text={'botão para deletar'}/>
            </ListPersons>
          ) )
      }
      </ContainerList>
    </ContainerPage>
  )
}

export default Users;