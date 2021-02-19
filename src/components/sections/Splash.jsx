import styled from 'styled-components';

const Splash = () => {
  return (
    <FrontPage id='home'>
      <div className='box'>
        <h1>I am Paulo Alves</h1>
        <h2>Web Developer</h2>
      </div>
    </FrontPage>
  );
};

const FrontPage = styled.div`
  max-height: 100vh;

  .box {
    width: 700px;
    text-align: center;
    margin: 21% auto;

    h1 {
      font-size: 70px;
      font-family: poppins;
      text-transform: uppercase;
      color: #fff;
      text-align: left;
      margin-top: 25%;
    }

    h2 {
      color: #ccc;
      text-align: left;
    }
  }
`;

export default Splash;
