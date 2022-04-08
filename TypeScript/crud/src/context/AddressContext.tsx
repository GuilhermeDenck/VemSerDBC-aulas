import { FC, createContext, useState, ReactNode } from 'react';
import { AddressDTO } from '../model/AddressDTO';
import { CepDTO } from '../model/CepDTO';
import axios from 'axios';
import api from '../service/api';

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
    console.log(id);
    try {
      const { data } = await api.delete(`/endereco/${id}`);
    } catch (error) {
      console.log(error);
    }
    
    getAllAddress();
  }

  const sendAddress = async (values: CepDTO) => {
    try {
      const { cep, logradouro, complemento, localidade, uf, tipo, numero, pais } = values;

      const newAddress = {
        cep: cep,
        cidade: localidade,
        complemento: complemento,
        estado: uf,
        logradouro: logradouro,
        numero: parseInt(numero),
        pais: pais,
        tipo: tipo
      }

      const { data } = await api.post(`/endereco/${648}`, newAddress);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AddressContext.Provider value={{ getAddress, getAllAddress, deleteAddress, sendAddress, address }}>
      {children}
    </AddressContext.Provider>
  )
}

export default AddressProvider;