import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Col } from "react-bootstrap";
import "./login.scss";

const Login = () => {
  const { currentUser, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

  const [inputs, setInptus] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInptus((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className='login'>
      <Col xs={12} sm={10} md={11} lg={10} xl={7} className='login-container'>
        <div className='container--left'>
          <span>
            Welcome To <span className='logo'>MyChat</span>
          </span>
        </div>
        <form className='container--right' onSubmit={handleSubmit}>
          <header>Login</header>
          <div className='input-field'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
            <label htmlFor='password'>Password</label>
          </div>
          {errors && <div className='errors'>{errors}</div>}
          <div className='input-field'>
            <button>Login</button>
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
