import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthActions";

const Menu = ({auth, dispatch}) => {

  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {
          auth.auth && (
            <>
              <Link to={'/'}>Home</Link>
              <Link to={'/profile'}>Profile</Link>
              <button onClick={ () => handleLogout(dispatch, navigate)}> Logout </button>
            </>
          )
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth,
})

export default connect(mapStateToProps)(Menu);