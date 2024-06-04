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
      {navConfig.map((item) => (
        <MenuItem key={item.id} label={item.label} link={item.link} />
      ))}
    </motion.ul>
  );
}
