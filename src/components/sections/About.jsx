import styled from 'styled-components';

const About = () => {
  return (
    <AboutMe id='about'>
      <div className='header'>
        <h2>About me</h2>
      </div>
      <div className='about-me-text'>
        <p>
          I am a web developer with great passion for programming and
          technology. I have knowledge (and love) of <strong>Javascript</strong>{' '}
          and good understanding of <strong>React, React Native, HTML, </strong>{' '}
          SASS, Styled Components Vuejs, C#, .NET Core and SQL. And a great
          respect for <strong>CSS</strong>.
        </p>
        <br />
        <p>
          I am highly motivated, fast learner and I'm always trying to improve
          my skills.
        </p>
      </div>
    </AboutMe>
  );
};

const AboutMe = styled.div`
  height: 50vh;
  line-height: 1.7rem;
  font-weight: 400;
  background-color: #59c1d5;
  color: #000;
  padding: 30px;

  .header {
    h2 {
      text-align: center;
    }
  }

  .about-me-text {
    font-weight: 400;
    max-width: 600px;
    margin: auto;
    margin-top: 50px;
    font-size: 1.3rem;

    p {
    }
  }

  @media (max-width: 900px) {
    display: block;
    height: auto;

    .about-me-text {
      margin-top: 50px;
      font-size: 1.3rem;

      p {
      }
    }
  }
`;

export default About;
