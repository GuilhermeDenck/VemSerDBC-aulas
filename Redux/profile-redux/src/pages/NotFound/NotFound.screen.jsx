import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={ () => navigate('/') }> Ir para HomePage </button>
    </div>
  )
}
export default NotFound;