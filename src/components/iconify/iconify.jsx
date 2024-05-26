import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const Iconify = ({ icon, ...other }) => (
  <Icon className="w-10 h-10" icon={icon} {...other} />
);

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  width: PropTypes.number,
};

export default Iconify;
