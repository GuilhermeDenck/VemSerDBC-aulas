import { useContext } from 'react';
import { ButtonOptions } from '../../components';
import { AddressDTO } from '../../model/AddressDTO';
import { ListAddressDiv } from './Address.style'
import { AddressContext } from '../../context/AddressContext';

import BtnUpdate from '../../images/btnUpdate.svg';
import BtnDelete from '../../images/btnDelete.svg';

const ListAddress = ({ address }:AddressDTO) => {

  const { deleteAddress } = useContext<any>(AddressContext);

  const maskCep = (cep:string) => {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  const teste = () => {
    console.log('teste');
    
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
            <ButtonOptions onClick={ () => teste() } color={'#FEC400'} img={BtnUpdate} text={'botão para alterar'} />
            <ButtonOptions onClick={ () => deleteAddress(a.idEndereco) } color={'#F12B2C'} img={BtnDelete} text={'botão para deletar'} />
          </ListAddressDiv>
        ))
      }
    </>
  )

}

export default ListAddress;