import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  return (
    <div className='login'>
      <Col xs={12} sm={10} md={11} lg={10} xl={7} className='login-container'>
        <div className='container--left'>
          <span>
            Welcome To <span className='logo'>MyChat</span>
          </span>
        </div>
        <form className='container--right'>
          <header>Login</header>
          <div className='input-field'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              required
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-field'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='password'
              required
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='input-field'>
            <button onClick={() => login()}>Login</button>
          </div>
          <span>
            Don't have an account? <Link to='/register'>Sign up here</Link>
          </span>
        </form>
      </Col>
    </div>
  );
};

export default Login;
