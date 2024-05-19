import { motion } from 'framer-motion';
import { MenuItem } from './menu-item';
import { navConfig } from '../nav-config';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Links = () => (
  <motion.ul
    variants={variants}
    className=" w-100%  mt-10vh flex flex-col gap-4 px-8"
  >
    {navConfig.map((link) => (
      <MenuItem i={link.id} key={link.id} />
    ))}
  </motion.ul>
);
