import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
})

export default { playerShape };
