import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from '../../assets/nexius_logo_long.png';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #d1d3d2;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 40px;
`;

const StyledLink = styled(Link)`
  color: #8186a0;
  height: 100%;
  padding: 0 15px;
  text-decoration: none;
  font-size: 18px;
  //background-color: #0e9954;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
    background-color: #d1d3d2;
  }
  ${(props) =>
    props.$isFullLink &&
    `
    background-color: ${colors.primary};
    border-radius: 30px;
    color: #fff;
  `}
`;

function Header() {
  return (
      <StyledNav>
        <Link to="/">
          <img src={logo} alt="Shiny Logo" style={{ height: '40px' }} />
        </Link>

        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/freelancers">Freelancers</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>Survey</StyledLink>
        </LinkContainer>
      </StyledNav>
  );
}

export default Header;
