import { Formik, Field, Form, FormikHelpers } from 'formik';
import { CepDTO } from '../../model/CepDTO';
import axios from 'axios';
import api from '../../service/api';

import { ContainerFormAddress, DivForm, DivInput, LabelLogin, InputLogin } from './Address.style'

const Address = () => {

  const getAddress = async (values: CepDTO, setFieldValue: any) => {
    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('complemento', data.complemento);
      setFieldValue('bairro', data.bairro);
      setFieldValue('localidade', data.localidade);
      setFieldValue('uf', data.uf);
    } catch (error) {
      console.log(error);
    }
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
        tipo: tipo.toUpperCase()
      }

      const { data } = await api.post(`/endereco/${648}`, newAddress);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerFormAddress>
       <Formik
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',

          tipo: '',
          numero: '',
          pais: ''
        }}
        onSubmit={(
          values: CepDTO,
          { setSubmitting }: FormikHelpers<CepDTO>
        ) => {
          
          sendAddress(values);

        }}
      >
        {
          props => (
            <Form>
              <DivForm>
                <DivInput>
                  <LabelLogin htmlFor="cep"> Cep </LabelLogin>
                  <Field id="cep" as={InputLogin} name="cep" placeholder="cep" />
                <button type='button' onClick={ () => getAddress(props.values, props.setFieldValue)}> Consultar </button>
                </DivInput>


                <DivInput>
                  <LabelLogin htmlFor="logradouro"> Logradouro </LabelLogin>
                  <Field id="logradouro" as={InputLogin} name="logradouro" placeholder="logradouro" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="complemento"> Complemento </LabelLogin>
                  <Field id="complemento" as={InputLogin} name="complemento" placeholder="complemento" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="bairro"> Bairro </LabelLogin>
                  <Field id="bairro" as={InputLogin} name="bairro" placeholder="bairro" value={props.values.bairro}/>
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="localidade"> Cidade </LabelLogin>
                  <Field id="localidade" as={InputLogin} name="localidade" placeholder="localidade" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="uf"> Uf </LabelLogin>
                  <Field id="uf" as={InputLogin} name="uf" placeholder="uf" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="tipo"> Tipo </LabelLogin>
                  <Field id="tipo" as={InputLogin} name="tipo" placeholder="Residencial ou Comercial" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="numero"> Numero </LabelLogin>
                  <Field id="numero" as={InputLogin} name="numero" placeholder="numero" />
                </DivInput>

                <DivInput>
                  <LabelLogin htmlFor="pais"> País </LabelLogin>
                  <Field id="pais" as={InputLogin} name="pais" placeholder="pais" />
                </DivInput>

                <button type="submit"> Cadastrar Endereço </button>
              </DivForm>
            </Form>
          )
        }
      </Formik>
    </ContainerFormAddress>
  )
}

export default Address