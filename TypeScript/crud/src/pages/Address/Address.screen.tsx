import ListAddress from './ListAddress';
import api from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AddressDTO } from '../../model/AddressDTO';

import { TitlePage } from '../../global.style';
import { ContainerPage, ContainerList } from '../Users/Users.style';
import { DivTop, TableAddress, ButtonRegister } from './Address.style';
const Address = () => {

  const navigate = useNavigate();

  const [ address, setAddress ] = useState<AddressDTO['address']>([]);

  const getAllAddress = async () => {
    try {
      const {data} = await api.get('/endereco');
      setAddress(data);
    } catch (error) {
      console.log(error)
    }
  }

  const hasToken = localStorage.getItem("token");
  useEffect( () => {
    if (hasToken) {
      api.defaults.headers.common["Authorization"] = hasToken;
    }
    getAllAddress();
  },[])

  return (
      <ContainerPage>
        <DivTop>
          <TitlePage> Address </TitlePage>
          <ButtonRegister onClick={ () => navigate('/register-address') }> Register </ButtonRegister>
        </DivTop>
        <ContainerList>
          <TableAddress>
            <span>Logradouro</span>
            <span>Número</span>
            <span>Tipo</span>
            <span>CEP</span>
            <span>Cidade</span>
            <span>Estado</span>
            <span>Pais</span>
          </TableAddress>
          <ListAddress address={address}/>
        </ContainerList>
    </ContainerPage>
  )
}

export default Address