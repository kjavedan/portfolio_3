import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const MenuItem = ({ label }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      variants={variants}
    >
      <span className="px-3 py-2 cursor-pointer">{label}</span>
    </motion.li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
};
