
import { AddressDTO } from '../../model/AddressDTO';
import { ListAddressDiv } from './Address.style'

const ListAddress = ({ address }:AddressDTO) => {

  const maskCep = (cep:string) => {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  return (
    <>
      {
        address.map( a => (
          <ListAddressDiv key={a.idEndereco}>
            <p> {a.logradouro} </p>
            <p> {a.numero} </p>
            <p> {a.tipo} </p>
            <p> {maskCep(a.cep)} </p>
            <p> {a.cidade} </p>
            <p> {a.estado} </p>
            <p> {a.pais} </p>
          </ListAddressDiv>
        ))
      }
    </>
  )

}

export default ListAddress;