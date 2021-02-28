import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Contact() {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const validationRules = {
    name: (val) => val,
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val,
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return <p className='errorMsg'>Please enter a valid {field}.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  /* End new validation ^^^^ */

  // Input Change Handling

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mrgovaoq',
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!');
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <ContactMe id='contact'>
      <h2>Contact</h2>
      <form onSubmit={handleOnSubmit} noValidate>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='name'
          name='name'
          onChange={handleOnChange}
          value={inputs.name}
          className={fieldErrors.name ? 'error' : ''}
        />
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='email'
          name='email'
          onChange={handleOnChange}
          value={inputs.email}
          className={fieldErrors.email ? 'error' : ''}
        />
        {renderFieldError('email')}
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          onChange={handleOnChange}
          value={inputs.message}
          className={fieldErrors.message ? 'error' : ''}
          cols='30'
          rows='10'
        ></textarea>
        {renderFieldError('message')}
        <button className='btn' type='submit' disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <h2 className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </h2>
        )}
      </form>
    </ContactMe>
  );
}

const ContactMe = styled.div`
  line-height: 1.7rem;
  background-color: #59c1d5;
  color: #000;
  padding: 30px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  input,
  textarea {
    text-align: left;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 40%;
    margin-bottom: 20px;
    font-size: 1.1rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  textarea {
    columns: 30;
  }

  .btn {
    transition: all 1s ease-in-out;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 1.3rem;
    text-align: center;
    background-color: #141738;
    color: #f6b011;
    width: 41.5%;
  }

  .btn:hover {
    transition: all 1s ease-in-out;
    background-color: #f6b011;
    color: #141738;
  }

  @media (max-width: 900px) {
    max-width: 100%;

    textarea {
      max-width: 90%;
    }
  }
`;

export default Contact;
