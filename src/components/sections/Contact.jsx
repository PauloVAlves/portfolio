import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const Contact = () => {
  const [status, setStatus] = useState('');

  const formSubmit = (ev) => {
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: 'SUCCESS' });
      } else {
        setStatus({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  };

  return (
    <ContactMe
      method='post'
      onSubmit={formSubmit}
      action='https://formspree.io/f/mrgovaoq'
      id='contact'
    >
      <h2>Contact</h2>
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message' cols='30' rows='10'></textarea>

      {status === 'SUCCESS' ? (
        <p>Thanks!</p>
      ) : (
        <button onClick={formSubmit} className='btn btn-send'>
          Send
        </button>
      )}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
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
