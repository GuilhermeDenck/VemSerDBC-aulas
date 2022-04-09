import { FC, createContext, useState, ReactNode } from 'react';
import { AddressDTO } from '../model/AddressDTO';
import { CepDTO } from '../model/CepDTO';
import axios from 'axios';
import api from '../service/api';
import Notiflix from "notiflix";

export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({ children }) => {

  const [ address, setAddress ] = useState<AddressDTO['address']>([]);

  const getAddress = async (values: CepDTO, formikProps: any) => {
    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${values}/json/`);
      formikProps.setFieldValue('logradouro', data.logradouro);
      formikProps.setFieldValue('complemento', data.complemento);
      formikProps.setFieldValue('bairro', data.bairro);
      formikProps.setFieldValue('localidade', data.localidade);
      formikProps.setFieldValue('uf', data.uf);
    } catch (error) {
      console.log(error);
    }
  }

  const getAllAddress = async () => {
    try {
      const {data} = await api.get('/endereco');
      setAddress(data);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAddress = async (id: number) => {
    Notiflix.Confirm.show(
      'Alerta de Confirmação',
      'Tem certeza que deseja apagar este endereço?',
      'Sim',
      'Não',
      async function confirmButton() {
          try {
              await api.delete(`/endereco/${id}`)
              Notiflix.Notify.success('Você excluiu esse endereço!');
              getAllAddress();
          } catch (error) {
              Notiflix.Notify.failure('Ocorreu um erro ao excluir este endereço!');
              console.log(error)
          }  
      },
      function cancelButton() {
          Notiflix.Notify.warning('Operação cancelada');
      },
      {
        width: '420px',
        borderRadius: '10px',
      },
    );

  }

  return (
    <AddressContext.Provider value={{ getAddress, getAllAddress, deleteAddress, address }}>
      {children}
    </AddressContext.Provider>
  )
}

export default AddressProvider;