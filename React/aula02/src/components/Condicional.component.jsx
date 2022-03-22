import styles from './Condicional.module.css';

const Condicional = () => {

  const nome = true;

  return (
    <div className={styles.condicional}>
      {nome && <h1> Condicional </h1> }
      {nome ? <h1> Condicional </h1> : <h2> Sem condicional </h2>}
    </div>
  )
}

export default Condicional;
