import colors from './colors';
import styled, { keyframes } from 'styled-components';

// `react-router-dom` can sometimes fail to resolve in the Jest environment
// (conditional exports / resolver differences). Fall back to a plain anchor
// when running tests so style components can be created without the package.
let LinkComponent;
try {
  // Prefer require so resolution errors can be caught at runtime in tests
  // eslint-disable-next-line global-require
  LinkComponent = require('react-router-dom').Link;
} catch (e) {
  /* istanbul ignore next */
  LinkComponent = (props) => {
    const { children, to, ...rest } = props;
    return (
      /* @__PURE__ */ /* eslint-disable react/jsx-no-target-blank */
      /* eslint-disable react/prop-types */
      <a href={to} {...rest}>
        {children}
      </a>
    );
  };
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

export const StyledLink = styled(LinkComponent)`
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`;
