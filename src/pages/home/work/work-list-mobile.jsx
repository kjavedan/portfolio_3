import './css/styles.css';

import Iconify from 'src/components/iconify/iconify';
import { motion } from 'framer-motion';
import { useRouter } from 'src/hooks/use-router';
import { paths } from 'src/routes/paths';
const parentVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkListMobile() {
  const router = useRouter();

  const projectsDataMobile = [
    {
      data: [
        { title: 'chikrice v2', path: 'chikrice-v2' },
        { title: 'chikrice v1', path: 'chikrice-v1' },
      ],
    },
    {
      data: [
        { title: 'jojooshop', path: 'jojooshop' },
        { title: 'jojooshop admin', path: 'jojooshop-admin' },
      ],
    },
    {
      data: [
        { title: 'web game', path: 'web-game' },
        { title: 'uniestate', path: 'uniestate' },
      ],
    },
  ];

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="work-list-mobile"
    >
      {projectsDataMobile.map((group, index) => (
        <motion.div
          key={index}
          className=" button-group mb-2 rounded-30px flex flex-col gap-2"
        >
          {group.data.map((project, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={childVariants}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push(paths.project(project.path))}
              className="bg-[#E9E9E9] py-3 cursor-pointer text-[--clr-title] flex items-center justify-between button-group__item px-7 uppercase rounded-30px"
            >
              <span>{project.title}</span>
              <Iconify icon="pepicons-pencil:arrow-right" />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
