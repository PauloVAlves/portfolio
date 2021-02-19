import styled from 'styled-components';

const Footer = () => {
  const date = new Date();
  var year = date.getFullYear();
  return (
    <Foot className='footer'>
      <p>Paulo Alves &copy; {year} </p>
    </Foot>
  );
};

const Foot = styled.div`
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export default Footer;
