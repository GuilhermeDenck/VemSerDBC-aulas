import { 
  Card,
  Container,
  CardTitle
} from "./Home.styles";
import api from "../../service/api";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddressContext } from '../../context/AddressContext';
import { PersonContext } from "../../context/PersonContext";


const Home = () => {

  const navigate = useNavigate();

  const { getAllAddress, address } = useContext<any>(AddressContext);
  const { getPersons, persons } = useContext<any>(PersonContext);

  const hasToken = localStorage.getItem('token');
  useEffect(() => {
    if (hasToken) {
      api.defaults.headers.common["Authorization"] = hasToken;
    }

    getAllAddress();
    getPersons();
  }, []);

  return (
    <Container>
      <Card onClick={ () => navigate('/users') }>
        <CardTitle> Total de Pessoas Registradas </CardTitle>
        <h2> {persons.length} </h2>
      </Card>
      <Card onClick={ () => navigate('/address') } >
        <CardTitle> Total de Endereços Registrados </CardTitle>
        <h2> {address.length} </h2>
      </Card>
    </Container>
  )
}

export default Home