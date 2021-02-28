import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
    err: '',
    buttonValue: 'Send',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const formSublit = (e) => {
    e.preventDefault();

    setData({ ...data, buttonValue: 'Sending...' });

    axios
      .post('/sendmail', data)
      .then((res) => {
        if (res.data.result !== 'success') {
          setData({
            ...data,
            buttonValue: 'Failed to send',
            sent: false,
            err: 'fail',
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        } else {
          setData({
            ...data,
            sent: true,
            buttonValue: 'Email Sent!',
            err: 'success',
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        }
      })
      .catch((err) => {
        setData({ ...data, buttonValue: 'Failed to send', err: 'fail' });
      });
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonValue: 'Send',
      err: '',
    });
  };

  return (
    <ContactMe
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      id='contact'
    >
      <h2>Contact</h2>
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={data.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor='message'>Message</label>
      <textarea
        name='message'
        id='message'
        cols='30'
        rows='10'
        value={data.message}
        onChange={handleChange}
      ></textarea>
      <button onClick={formSublit} className='btn btn-send'>
        {data.buttonValue}
      </button>
    </ContactMe>
  );
};

const ContactMe = styled.form`
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
