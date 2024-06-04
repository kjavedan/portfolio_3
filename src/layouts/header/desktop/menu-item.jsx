import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const MenuItem = ({ label, link }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      variants={variants}
    >
      <a className="px-3 py-2 cursor-pointer" href={link} target={'_blank'}>
        {label}
      </a>
    </motion.li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};
