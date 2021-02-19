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
          technology. I have great knowledge of Javascript and good
          understanding of React, React Native, Vuejs, .NET Core, HTML, CSS,
          SASS and Styled Components.
        </p>
        <br />
        <p>
          I am highly motivated, fast learner and always trying to improve my
          skills.
        </p>
      </div>
    </AboutMe>
  );
};

const AboutMe = styled.div`
  height: 50vh;
  line-height: 1.7rem;
  background-color: #59c1d5;
  color: #000;
  padding: 30px;

  .header {
    h2 {
      text-align: center;
    }
  }

  .about-me-text {
    font-weight: 600;
    max-width: 600px;
    margin: auto;
    margin-top: 100px;
    font-size: 1.3rem;

    p {
    }
  }
`;

export default About;