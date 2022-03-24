import { useEffect, useState } from "react";
import axios from "axios";

const Initial = () => {

  const setup = async () => {
    const {data} = await axios.get('https://api.github.com/users/GuilhermeDenck');
    console.log(data);
  }

  
  useEffect(() => {
    setup();
  }, []);

  const [nome, setNome] = useState("");

  return (
    <div>
      <input type="text" onChange={ e => setNome(e.target.value)}/>
    </div>
  );
}

export default Initial;