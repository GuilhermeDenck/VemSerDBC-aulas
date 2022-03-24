import React from 'react'

const Lista = ({itens}) => {

  return (
    <>
      <h3>Lista de tecnologias</h3>
      {itens.length > 0 ? itens.map( (item, index) => (
        <p key={index}>{item}</p>
      )) : (<p>Nenhuma tecnologia cadastrada</p>)}

      {/* {itens.map( item => <li key={item}>{item}</li>)} */}
    </>
  )
}
export default Lista;
