const SeuNome = ({setNome, setIdade}) => {
  return (
    <div>
      <p>Digite seu Nome</p>
      <input type="text" placeholder="Qual é o seu nome" onChange={ e => setNome(e.target.value)}/>
      <input type="text" placeholder="Qual é a sua idade" onChange={ e => setIdade(e.target.value)}/>

      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome} setIdade={setIdade}/> NA APP */}
    </div>
  );
}

export default SeuNome;