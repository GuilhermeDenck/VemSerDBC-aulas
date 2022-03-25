import { useContext } from "react";
import { CountContext } from "../../context/CountContext";

const Mirror = () => {

  const {count, name} = useContext(CountContext);

  return (
    <div>
      <h1>Espelho: {count}  nome: {name}</h1>
    </div>
  );
}

export default Mirror;