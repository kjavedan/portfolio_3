import { motion } from 'framer-motion';
import { navConfig } from '../nav-config';
import { MenuItem } from './menu-item';

const variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Links() {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={variants}
      className="flex items-center gap-2"
    >
      {navConfig.map((link) => (
        <MenuItem key={link.id} label={link.label} />
      ))}
    </motion.ul>
  );
}
