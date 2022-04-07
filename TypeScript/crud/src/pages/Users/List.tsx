import moment from "moment";
import { PersonDTO } from "../../model/PersonDTO";
import { ListPersons } from './Users.style'

const List = ({ persons }:PersonDTO) => {

  const maskCPF = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  return (
    <>
      {
        persons.map( p => (
          <ListPersons>
              <p> {p.nome} </p>
              <p> {moment(p.dataNascimento).format('DD/MM/YYYY')} </p>
              <p> {maskCPF(p.cpf)} </p>
              <p> {p.email} </p>
          </ListPersons>
        ) )
      }
    </>
  )

}

export default List;