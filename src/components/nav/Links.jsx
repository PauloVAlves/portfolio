import styled from 'styled-components';

const Links = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href='#'>Home</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  position: fixed;

  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #f6b011;
  }

  a:hover {
    color: #f2506e;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #59c1d5;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0) ' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    font-size: 2rem;
  }

  li {
    color: #fff;
  }
`;

export default Links;
