import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.01 }}
      transition={{
        duration: 0.2,
      }}
      className="h-30"
    >
      <div className="h-full w-full rounded-3xl bg-[#eee] cursor-pointer" />
    </motion.li>
  );
};
