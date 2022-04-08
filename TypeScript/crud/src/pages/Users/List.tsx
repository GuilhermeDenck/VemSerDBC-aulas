import { useContext } from "react";
import { PersonContext } from "../../context/PersonContext";

import moment from "moment";
import { PersonDTO } from "../../model/PersonDTO";
import { ButtonOptions } from '../../components';
import { ListPersons } from './Users.style'
import BtnUpdate from '../../images/btnUpdate.svg';
import BtnDelete from '../../images/btnDelete.svg';


const List = ({ persons }:PersonDTO) => {

  const { deletePerson } = useContext<any>(PersonContext);

  const maskCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  const teste = () => {
    console.log('teste');
  }

  return (
    <>
      {
        persons.map( p => (
          <ListPersons key={p.idPessoa}>
              <p> {p.nome} </p>
              <p> {moment(p.dataNascimento).format('DD/MM/YYYY')} </p>
              <p> {maskCPF(p.cpf)} </p>
              <p> {p.email} </p>
              <ButtonOptions onClick={ () => teste() } color={'#FEC400'} img={BtnUpdate} text={'botão para alterar'} />
              <ButtonOptions onClick={ () => deletePerson(p.idPessoa) } color={'#F12B2C'} img={BtnDelete} text={'botão para deletar'}/>
          </ListPersons>
        ) )
      }
    </>
  )
}

export default List;