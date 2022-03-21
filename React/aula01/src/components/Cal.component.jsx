
const Cal = ({ valor1, valor2 }) => {

  const resultSum = () => valor1 + valor2;
  const resultSubtraction = () => valor1 - valor2;
  const resultMultiplication = () => valor1 * valor2;
  const resultDivision = () => valor1 / valor2;

  return (
    <>
      <h2> Soma {valor1} + {valor2} = {resultSum(valor1, valor2)} </h2>
      <h2> Diminuição {valor1} - {valor2} = {resultSubtraction(valor1, valor2)} </h2>
      <h2> Multiplicação {valor1} * {valor2} = {resultMultiplication(valor1, valor2)}  </h2>
      <h2> Divisão {valor1} / {valor2} = {resultDivision(valor1, valor2)} </h2>
    </>
  );
};

export default Cal;