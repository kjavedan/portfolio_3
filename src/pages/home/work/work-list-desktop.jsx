import { motion } from 'framer-motion';
import WorkListDesktopItem from './work-list-desktop-item';

const parentVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function WorkListDesktop() {
  const projectsDataDesktop = [
    {
      path: 'chikrice',
      title: 'chikrice',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description:
        'ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ',
    },
    {
      path: 'chikrice-admin',
      title: 'chikrice admin',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description: 'this is a description',
    },
    {
      path: 'jojooshop',
      title: 'jojooshop',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description: 'this is a description',
    },
    {
      path: 'jojooshop-admin',
      title: 'jojooshop admin',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description: 'this is a description',
    },
    {
      path: 'web-game',
      title: 'web game',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description: 'this is a description',
    },
    {
      path: 'other',
      title: 'other...',
      techStack: ['React.js', 'MUI', 'Vue.js'],
      description: 'this is a description',
    },
  ];

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid lg:cols-2 xl:cols-3 gap-4 "
    >
      {projectsDataDesktop.map((project, index) => (
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
