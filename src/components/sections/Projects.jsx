import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import calorias from '../../assets/calcalorias.png';

const Projects = () => {
  return (
    <Project id='projects'>
      <h2>Projects</h2>
      <div className='card'>
        <div className='image'>
          <img src={calorias} alt='' />
        </div>
        <div className='actions'>
          <h3>Calcalorias</h3>
          <p>
            The application calculates the calories of a recipe, just add food
            and quantity, add the portion and click calculate.
          </p>
          <div className='find-more'>
            <a href='#'>
              <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
            </a>

            <a href='https://calcalorias.netlify.app' className='live'>
              Acesse
            </a>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='image'>
          <img src='../assets/logo512.png' alt='' />
        </div>
        <div className='actions'>
          <h3>Calcalorias</h3>
          <p>
            O aplicativo calcula as calorias de uma receita,bastando adicionar
            os alimentos e a quantidade, adicionar a porção e clicar em
            calcular.
          </p>
          <div className='find-more'>
            <a href='#'>
              <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
            </a>

            <a href='https://calcalorias.netlify.app' className='live'>
              Live Demo
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
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px;
    background-color: #59c1d5;
    border-radius: 10px;
    margin: 10px;
    color: #000;
  }

  .live:hover {
    color: #f6b011;
    background-color: #141738;
  }
  .icon {
    font-size: 1.7rem;
    color: #000;
  }
`;
export default Projects;
