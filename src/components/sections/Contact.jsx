import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactMe action='POST' method='post' data-netlify='true' id='contact'>
      <h2>Contact</h2>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message' cols='30' rows='10'></textarea>
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
    min-width: 40%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1.3rem;
    border-radius: 10px;
    border: none;
  }
`;

export default Contact;
