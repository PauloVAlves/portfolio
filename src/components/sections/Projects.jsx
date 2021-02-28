import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import caloriasSite from '../../assets/calcalorias-site.png';
import caloriasApp1 from '../../assets/first.png';

const Projects = () => {
  return (
    <Project id='projects'>
      <h2>Projects</h2>
      <div className='card'>
        <div className='image'>
          <img src={caloriasSite} alt='Web App' />
        </div>
        <div className='actions'>
          <h3>Calcalorias</h3>
          <p>
            The application calculates the calories of a recipe, just add food
            and quantity, add the portion and click calculate.
          </p>
          <div className='find-more'>
            <a href='https://github.com/PauloVAlves/CalCalculadora'>
              <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
            </a>
            <a href='https://calcalorias.com' className='live'>
              Visit
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='image'>
          <img src={caloriasApp1} alt='Mobile App' />
        </div>
        <div className='actions'>
          <h3>Calcalorias - Mobile</h3>
          <p>The app calculates all the nutritional values of a recipe.</p>
          <div className='find-more'>
            <a href='https://github.com/PauloVAlves/calcalorias-react-native'>
              <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
            </a>
            <a href='#'>
              <FontAwesomeIcon
                className='app-icon'
                icon={['fab', 'google-play']}
              />
            </a>
          </div>
        </div>
      </div>
    </Project>
  );
};

const Project = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: block;

  h2 {
    color: #ccc;
    text-align: center;
  }
  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    max-width: 40%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .image {
    border-radius: 10px;
  }
  img {
    width: 300px;
    height: 300px;
    left: 0;
  }

  .actions {
    right: 0;
  }

  h3 {
    margin-top: 20px;
    padding: 15px;
  }

  p {
    padding: 15px;
  }

  .find-more {
    text-align: center;
    margin-top: 30px;
  }

  .live {
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 5px;
    background-color: #59c1d5;
    border-radius: 10px;
    margin: 10px;
    color: #000;
  }

  .live:hover {
    transition: all 0.5s ease-in-out;
    color: #f6b011;
    background-color: #141738;
  }

  .icon {
    font-size: 1.7rem;
    color: #000;
  }

  .app-icon {
    margin-left: 20px;
    font-size: 1.7rem;
  }

  @media (max-width: 1200px) {
    .card {
      display: flex;
      flex-direction: column;
      min-width: 80%;
    }

    .image {
      border-radius: 10px;
      padding: 0;
    }
    img {
      width: 100%;
      max-height: auto;
    }

    .find-more {
      margin-bottom: 30px;
    }
  }
`;
export default Projects;
