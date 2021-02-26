import styled from 'styled-components';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  max-width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;

  @media (max-width: 900px) {
    max-width: auto;
  }
`;

export default Navbar;
