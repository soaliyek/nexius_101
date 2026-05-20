import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
`;

const CardLabel = styled.span`
  font-size: 22px;
  color: #5843e4;
  font-weight: bold;
`;

const CardTitle = styled.span`
  font-size: 18px;
  color: #fff;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

function Card({ label, title, picture }) {
  return (
    <CardContainer>
      <CardLabel> {label} </CardLabel>
      <CardImage src={picture} alt="freelancer" />
      <CardTitle> {title} </CardTitle>
    </CardContainer>
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
  picture: DefaultPicture
};

export default Card;
