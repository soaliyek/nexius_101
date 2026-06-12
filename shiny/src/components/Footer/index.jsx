import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.backgroundLight};
`;

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <FooterContainer>
      <NightModeButton onClick={toggleTheme}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
