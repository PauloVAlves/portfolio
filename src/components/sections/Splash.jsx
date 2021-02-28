import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Splash = () => {
  return (
    <FrontPage id='home'>
      <div className='box'>
        <h1>I am Paulo Alves</h1>
        <h2>Web Developer</h2>
        <div className='find-me'>
          <a href='https://github.com/PauloVAlves'>
            <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
          </a>
          <a href='https://www.linkedin.com/in/paulo-alves-49919015b/'>
            <FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} />
          </a>
        </div>
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
      font-size: 64px;
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

    .find-me {
      a {
        font-size: 2.5rem;
        margin: 10px;
        color: #fff;
      }
    }
  }

  @media (max-width: 1024px) {
    display: block;
    height: 65vh;

    .box {
      max-width: 100%;
      text-align: center;
      margin: auto;

      h1 {
        font-size: 1.6rem;
        font-family: poppins;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        margin-top: 50%;
      }

      h2 {
        color: #ccc;
        text-align: center;
      }

      .find-me {
        margin-top: 20px;
        a {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default Splash;
