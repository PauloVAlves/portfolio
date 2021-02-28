import styled from 'styled-components';

const Contact = () => {
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
      <input type='text' name='name' id='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message' cols='30' rows='10'></textarea>
      <input type='submit' value='Send' className='btn btn-send' />
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
    font-size: 1.3rem;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  .btn {
    transition: all 1s ease-in-out;
    cursor: pointer;
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
