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
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  background-color: 141738;
  color: #f2506e;

  .logo {
    font-size: 1.5rem;
    padding: 15px 0;
  }
`;

export default Navbar;
