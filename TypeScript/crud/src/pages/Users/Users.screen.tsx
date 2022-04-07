import { useEffect, useContext } from "react";
import { PersonContext } from "../../context/PersonContext";
import api from '../../service/api'

import List from './List'
import { ContainerPage, TitlePage, TablePersons, ContainerList } from './Users.style';
const Users = () => {

  const { getPersons, persons } = useContext<any>(PersonContext);
  const hasToken = localStorage.getItem("token");

  useEffect( () => {
    if (hasToken) {
      api.defaults.headers.common["Authorization"] = hasToken;
    }
    getPersons();
  },[]);
  
  return (
    <ContainerPage>
      <TitlePage> Persons </TitlePage>
      <ContainerList>
        <TablePersons>
          <span>Nome</span>
          <span>Aniverásario</span>
          <span>Cpf</span>
          <span>E-mail</span>
        </TablePersons>
        <List persons={persons}/>
      </ContainerList>
    </ContainerPage>
  )
}

export default Users;