import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { CepDTO } from '../../../model/CepDTO';
import axios from 'axios';
import api from '../../../service/api';

import { TitlePage, DivError, LabelForm } from '../../../global.style';
import { ContainerFormAddress, DivForm, DivInput, InputAddress, SelectAddress, ButtonSend } from './Form.style';

const FormAddress = () => {

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
        tipo: tipo
      }

      const { data } = await api.post(`/endereco/${648}`, newAddress);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const SignupSchema = Yup.object().shape({
    cep: Yup.string()
      .min(2, 'muito curto')
      .max(10, 'muito longo')
      .required('Favor preencha o campo '),
    logradouro: Yup.string()
      .min(5, 'muito curto')
      .max(50, 'muito longo')
      .required('Favor preencha o campo '),
    complemento: Yup.string()
      .min(3, 'muito curto')
      .max(30, 'muito longo'),
    bairro: Yup.string()
      .min(2, 'muito curto')
      .max(30, 'muito longo')
      .required('Favor preencha o campo '),
    localidade: Yup.string()
      .min(2, 'muito curto')
      .max(50, 'muito longo')
      .required('Favor preencha o campo '),
    uf: Yup.string()
      .min(2, 'muito curto')
      .max(3, 'muito longo')
      .required('Favor preencha o campo '),
    numero: Yup.string()
      .min(1, 'muito curto')
      .max(6, 'muito longo')
      .required('Favor preencha o campo '),
    pais: Yup.string()
      .min(3, 'muito curto')
      .max(30, 'muito longo')
      .required('Favor preencha o campo '),
  });

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

          tipo: 'RESIDENCIAL',
          numero: '',
          pais: ''
        }}
        validationSchema={SignupSchema}
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
                <TitlePage> Cadastro de Endereço </TitlePage>
                  <DivInput>
                    <LabelForm htmlFor="cep"> Cep </LabelForm>
                    <Field id="cep" as={InputAddress} name="cep" placeholder="Digite seu cep" onBlur={ () => getAddress(props.values, props.setFieldValue)}/>
                    {props.errors.cep && props.touched.cep ? ( <DivError>{props.errors.cep}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="logradouro"> Logradouro </LabelForm>
                    <Field id="logradouro" as={InputAddress} name="logradouro" placeholder="Digite seu logradouro" />
                    {props.errors.logradouro && props.touched.logradouro ? ( <DivError>{props.errors.logradouro}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="complemento"> Complemento </LabelForm>
                    <Field id="complemento" as={InputAddress} name="complemento" placeholder="Digite seu complemento" />
                    {props.errors.complemento && props.touched.complemento ? ( <DivError>{props.errors.complemento}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="bairro"> Bairro </LabelForm>
                    <Field id="bairro" as={InputAddress} name="bairro" placeholder="Digite seu bairro" value={props.values.bairro}/>
                    {props.errors.bairro && props.touched.bairro ? ( <DivError>{props.errors.bairro}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="localidade"> Cidade </LabelForm>
                    <Field id="localidade" as={InputAddress} name="localidade" placeholder="Digite sua localidade" />
                    {props.errors.localidade && props.touched.localidade ? ( <DivError>{props.errors.localidade}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="uf"> Uf </LabelForm>
                    <Field id="uf" as={InputAddress} name="uf" placeholder="Digite seu Estado" />
                    {props.errors.uf && props.touched.uf ? ( <DivError>{props.errors.uf}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="tipo"> Tipo </LabelForm>
                    <Field as={SelectAddress} name="tipo">
                      <option value="RESIDENCIAL">RESIDENCIAL</option>
                      <option value="COMERCIAL">COMERCIAL</option>
                    </Field>
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="numero"> Numero </LabelForm>
                    <Field id="numero" as={InputAddress} name="numero" placeholder="Digite o número de sua residência" />
                    {props.errors.numero && props.touched.numero ? ( <DivError>{props.errors.numero}</DivError>) : null}
                  </DivInput>

                  <DivInput>
                    <LabelForm htmlFor="pais"> País </LabelForm>
                    <Field id="pais" as={InputAddress} name="pais" placeholder="Digite seu pais" />
                    {props.errors.pais && props.touched.pais ? ( <DivError>{props.errors.pais}</DivError>) : null}
                  </DivInput>

                  <ButtonSend type="submit"> Cadastrar Endereço </ButtonSend>
              </DivForm>
            </Form>
          )
        }
      </Formik>
    </ContainerFormAddress>
  )
}

export default FormAddress;