import ListAddress from './ListAddress';
import api from '../../service/api';
import { useFormik, FormikHelpers } from 'formik';
import { useEffect, useContext } from 'react';

import { AddressContext } from '../../context/AddressContext';

import { TitlePage, LabelForm } from '../../global.style';
import { ContainerPage, ContainerList, DivInput, InputForm } from '../Users/Users.style';
import { TableAddress, FormAddress, GridInputsAddress, ButtonRegister, SelectAddress } from './Address.style';
import { CepDTO } from '../../model/CepDTO';
const Address = () => {

  const { address, getAllAddress, getAddress, sendAddress } = useContext<any>(AddressContext);

  const hasToken = localStorage.getItem("token");
  useEffect( () => {
    if (hasToken) {
      api.defaults.headers.common["Authorization"] = hasToken;
    }
    getAllAddress();
  },[]);

  const formikProps = useFormik({
    initialValues: {
      cep: '',
      logradouro: '',
      complemento: '',
      localidade: '',
      uf: '',

      tipo: 'RESIDENCIAL',
      numero: '',
      pais: ''
    },
    onSubmit: (values:CepDTO, { setSubmitting }: FormikHelpers<CepDTO>) => {
      setSubmitting(false);
      sendAddress(values);
    },
  });

  return (
      <ContainerPage>
        <FormAddress onSubmit={formikProps.handleSubmit}>
          <GridInputsAddress>
            <DivInput>
              <LabelForm>CEP</LabelForm>
              <InputForm id="cep" name="cep" placeholder="Digite seu CEP" value={formikProps.values.cep} onChange={formikProps.handleChange} onBlur={ () => getAddress(formikProps.values.cep, formikProps) } />
            </DivInput>

            <DivInput>
              <LabelForm>Logradouro</LabelForm>
              <InputForm id="logradouro" name="logradouro" placeholder="Digite seu Logradouro" value={formikProps.values.logradouro} onChange={formikProps.handleChange} />
            </DivInput>

            <DivInput>
              <LabelForm>Complemento</LabelForm>
              <InputForm id="complemento" name="complemento" placeholder="Digite seu Complemento" value={formikProps.values.complemento} onChange={formikProps.handleChange} />
            </DivInput>

            <DivInput>
              <LabelForm>Localidade</LabelForm>
              <InputForm id="localidade" name="localidade" placeholder="Digite sua Localidade" value={formikProps.values.localidade} onChange={formikProps.handleChange} />
            </DivInput>

            <DivInput>
              <LabelForm>UF</LabelForm>
              <InputForm id="uf" name="uf" placeholder="Digite seu UF" value={formikProps.values.uf} onChange={formikProps.handleChange} />
            </DivInput>

            <DivInput>
              <LabelForm>Tipo</LabelForm>
              <SelectAddress id="tipo" name="tipo" placeholder="Digite seu Tipo" value={formikProps.values.tipo} onChange={formikProps.handleChange} >
                  <option value="RESIDENCIAL">Residencial</option>
                  <option value="COMERCIAL">Comercial</option>
              </SelectAddress>
            </DivInput>

            <DivInput>
              <LabelForm>Número</LabelForm>
              <InputForm id="numero" name="numero" placeholder="Digite seu Número" value={formikProps.values.numero} onChange={formikProps.handleChange} />
            </DivInput>

            <DivInput>
              <LabelForm>Pais</LabelForm>
              <InputForm id="pais" name="pais" placeholder="Digite seu País" value={formikProps.values.pais} onChange={formikProps.handleChange} />
            </DivInput>

          </GridInputsAddress>
          <ButtonRegister type='submit'> Registrar Endereço </ButtonRegister>
        </FormAddress>
        <TitlePage> Address </TitlePage>
        <ContainerList>
          <TableAddress>
            <span>Logradouro</span>
            <span>Número</span>
            <span>Tipo</span>
            <span>CEP</span>
            <span>Cidade</span>
            <span>Estado</span>
            <span>Pais</span>
            <span> Atualizar </span>
            <span> Deletar </span>
          </TableAddress>
          <ListAddress address={address}/>
        </ContainerList>
    </ContainerPage>
  )
}

export default Address