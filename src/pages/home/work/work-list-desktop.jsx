import { motion } from 'framer-motion';
import WorkListDesktopItem from './work-list-desktop-item';
import { projectsData } from 'src/data';

const parentVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function WorkListDesktop() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid lg:cols-2 xl:cols-3 gap-4 "
    >
      {projectsData.map((project, index) => (
        <WorkListDesktopItem
          key={index}
          path={project.path}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
        />
      ))}
    </motion.div>
  );
}
