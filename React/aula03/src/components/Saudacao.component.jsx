const Saudacao = ({nome, idade}) => {
  return (
    <>
      <p>{nome}</p>
      <p>{idade}</p>

      {/* <h1>State Lift</h1>
      <Saudacao nome={nome} idade={idade}/> NA APP*/}
    </>
  );
}

export default Saudacao;