import { Link } from 'react-router-dom';
import styled from 'styled-components';

/*
const HeaderContainer = styled.header`
  background-color: #1c0b8d;
  height: 60px;
  display: flex;
  align-items: center;
`;
*/

const HeaderContainer = styled.header`
  background-color: #d1d3d2;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  gap: 20px;
  height: 30px;
  background-color: #d1d3d2;
  padding: 5px 15px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #5843E4;
  height: 100%;
  padding: 0 15px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #fff;
    background-color: #d1d3d2;
  }
  ${(props) => props.$isFullLink && `
    background-color: #5843E4;
    border-radius: 30px;
    color: #fff;
  `}
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelancers">Freelancers</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Survey</StyledLink>
      </StyledNav>
    </HeaderContainer>
  );
}

export default Header;
