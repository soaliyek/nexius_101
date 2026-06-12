import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  trasition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px ${colors.secondary};
  }
`;

const CardLabel = styled.span`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: bold;
`;

const CardTitle = styled.span`
  font-size: 18px;
  color: #976262;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel> {label} </CardLabel>
      <CardImage src={picture} alt="freelancer" />
      <CardTitle> {title} </CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: 'Default Label',
  title: 'Default Title',
  picture: DefaultPicture,
};

export default Card;
