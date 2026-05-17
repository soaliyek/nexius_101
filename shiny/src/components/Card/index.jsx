import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';

function Card({ label, title, picture }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        gap: 10,
      }}
    >
      <span> {label} </span>
      <img src={picture} alt="freelancer" height="80px" width="80px" />
      <span> {title}</span>
    </div>
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
