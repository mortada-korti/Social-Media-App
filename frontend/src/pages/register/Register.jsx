import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };
  return (
    <div className='register'>
      <Col
        xs={12}
        sm={10}
        md={11}
        lg={10}
        xl={7}
        className='register-container'>
        <form className='container--left' onSubmit={handleSubmit}>
          <header>Register</header>
          <div className='input-field'>
            <input
              type='text'
              id='first_name'
              name='first_name'
              placeholder='First Name'
              onChange={handleChange}
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
              onChange={handleChange}
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
          <div className='input-field'>
            <input
              type='password'
              id='confirm_password'
              name='confirm_password'
              placeholder='confirm_password'
              onChange={handleChange}
              required
            />
            <label htmlFor='confirm_password'>Confirm Password</label>
          </div>
          {errors && <div className='errors'>{errors} !</div>}
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
