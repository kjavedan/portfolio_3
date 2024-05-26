import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/hooks/use-router';
import Iconify from 'src/components/iconify/iconify';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const titleVariants = {
  initial: { x: 40, y: 50 },
  hover: {
    x: 0,
    y: 0,
    translateX: 0,
    translateY: 0,
    transition: { duration: 0.3 },
  },
};

const arrowVariants = {
  initial: { opacity: 0, x: -20 },
  hover: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const descriptionVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } },
};

const techStackVariants = {
  initial: { opacity: 0, y: 7 },
  hover: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.4 + i * 0.1 },
  }),
};

export default function WorkListDesktopItem({
  path,
  title,
  techStack,
  description,
}) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      whileTap={{ scale: 0.99 }}
      onClick={() => router.push(paths.project(path))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-[#F4F5F6] rounded-30px cursor-pointer lg:h-20vh  p-8  text-[--clr-title] ${!isHovered ? 'flex items-center' : ''}`}
    >
      <div className={`${isHovered ? 'flex justify-between' : ''} relative`}>
        <motion.h3
          className={`uppercase text-2xl`}
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          variants={titleVariants}
        >
          {title}
        </motion.h3>
        {isHovered && (
          <motion.div
            initial="initial"
            animate="hover"
            variants={arrowVariants}
          >
            <Iconify icon="pepicons-pencil:arrow-right" />
          </motion.div>
        )}
      </div>
      {isHovered && (
        <div className="relative h-full mt-2">
          <div className="h-50%">
            <motion.p
              className="font-light line-clamp-3"
              initial="initial"
              animate="hover"
              variants={descriptionVariants}
            >
              {description}
            </motion.p>
          </div>
          <motion.div className="flex flex-wrap items-center gap-3 mt-3">
            {techStack.map((item, index) => (
              <motion.p
                key={index}
                className="bg-[#D7D7D7] px-3 py-2 rounded-3xl text-sm text-[#6F6F6F]"
                custom={index}
                initial="initial"
                animate="hover"
                variants={techStackVariants}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

WorkListDesktopItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  techStack: PropTypes.array,
  description: PropTypes.string,
};
