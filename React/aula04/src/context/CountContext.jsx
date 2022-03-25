import { createContext, useState } from "react";

export const CountContext = createContext();

const CountProvider = ({children}) => {

  const [count, setCount] = useState(0);
  const name = 'Tiaguinho';

  return (
    <CountContext.Provider value={{count, setCount, name}}> 
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;