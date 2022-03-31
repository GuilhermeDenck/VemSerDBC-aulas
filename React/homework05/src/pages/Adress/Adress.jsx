import { useState } from 'react';
import axios from 'axios';

import style from './Adress.module.css';

function Adress() {

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [tel, setTel] = useState('');

  const handleCep = async(e) => {
    let finalCep = e.target.value.split('-').join('');
    if(finalCep.length === 8) {
      try {
        const {data} = await axios.get(`https://viacep.com.br/ws/${finalCep}/json/`);
        console.log(data);
        setLogradouro(data.logradouro)
        setComplemento(data.complemento)
        setBairro(data.bairro)
        setLocalidade(data.localidade)
        setUf(data.uf)
        setTel(data.ddd)
        
        return data;
      } catch (error) {
        alert('CEP não encontrado');
        console.log(error);
      }
    }
  }
  
  const regexOnlyNumbers = /\D/g;

  const maskCep = (e) => {
    setCep(e.target.value.replace(regexOnlyNumbers, '').replace(/(\d{5})(\d{3})/, '$1-$2'));
    return e;
  }

  const maskTel = (e) => {
    setTel(e.target.value.replace(regexOnlyNumbers, '').replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{4})(\d)/, "$1-$2"));
    return e;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      cep: cep,
      logradouro: logradouro,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade,
      uf: uf,
      tel: tel
    }
    alert('Dados enviados com sucesso');
    alert(JSON.stringify(obj, null, 2));

    setCep('');
    setLogradouro('');
    setComplemento('');
    setBairro('');
    setLocalidade('');
    setUf('');
    setTel('');
  }

  return (
    <div className={style.pageAdress}>
      <div className={style.containerCep}>
        <h1>Cep</h1>
          <form onSubmit={handleSubmit} className={style.form}>
            <div>
              <label htmlFor="cep">Digite seu Cep</label>
              <input type="text"  name="cep" value={cep} maxLength="9" placeholder="digite seu CEP" onChange={ e => handleCep(maskCep(e))}/>
            </div>
            <div>
              <label htmlFor="rua">Rua</label>
              <input type="text" id="rua" value={logradouro} required placeholder="digite sua Rua" onChange={ e => setLogradouro(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="complemento">Complemento</label>
              <input type="text" id="complemento" value={complemento} placeholder="digite sua Complemento" onChange={ e => setComplemento(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" value={bairro} required placeholder="digite seu bairro" onChange={ e => setBairro(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" value={localidade} required placeholder="digite sua Cidade" onChange={ e => setLocalidade(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="estado">Estado</label>
              <input type="text" id="estado" value={uf} required placeholder="digite seu Estado" onChange={ e => setUf(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="tel">Telefone</label>
              <input type="text" id="tel" value={tel} placeholder="digite seu Telefone" onChange={ e => maskTel(e)} />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
      </div>
    </div>
  );
}

export default Adress