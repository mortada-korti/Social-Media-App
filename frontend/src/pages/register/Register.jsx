import { Link } from "react-router-dom";
import "./register.scss";
import { Col } from "react-bootstrap";

const Register = () => {
  return (
    <div className='register'>
      <Col
        xs={12}
        sm={10}
        md={11}
        lg={10}
        xl={7}
        className='register-container'>
        <form className='container--left'>
          <header>Register</header>
          <div className='input-field'>
            <input
              type='text'
              id='first_name'
              name='first_name'
              placeholder='First Name'
              required
            />
            <label htmlFor='first_name'>First Name</label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='last_name'
              name='last_name'
              placeholder='Last Name'
              required
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>
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
            <input
              type='password'
              id='confirm_password'
              name='confirm_password'
              placeholder='confirm_password'
              required
            />
            <label htmlFor='confirm_password'>Confirm Password</label>
          </div>
          <div className='input-field'>
            <button>Register</button>
          </div>
          <span>
            Already have an account? <Link to='/login'>Log in here</Link>
          </span>
        </form>
        <div className='container--right'>
          <span>
            Welcome To <span className='logo'>MyChat</span>
          </span>
        </div>
      </Col>
    </div>
  );
};

export default Register;
