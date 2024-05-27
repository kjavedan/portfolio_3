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
      title: 'chikrice',
      data: [
        { title: 'chikrice', path: 'chikrice' },
        { title: 'chikrice admin', path: 'chikrice-admin' },
      ],
    },
    {
      title: 'jojooshop',
      data: [
        { title: 'jojooshop', path: 'jojooshop' },
        { title: 'jojooshop admin', path: 'jojooshop-admin' },
      ],
    },
    {
      title: 'other',
      data: [
        { title: 'web game', path: 'web-game' },
        { title: 'other...', path: 'other' },
      ],
    },
  ];

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=""
    >
      {projectsDataMobile.map((group, index) => (
        <motion.div
          key={index}
          className="bg-[--clr-gray-bg] p-3.5 mb-2 rounded-30px flex flex-col gap-2"
        >
          {group.data.map((project, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={childVariants}
              whileTap={{ scale: 0.99 }}
              onClick={() => router.push(paths.project(project.path))}
              className="bg-[#E9E9E9] cursor-pointer text-[--clr-title] flex items-center justify-between py-3.5 px-7 text-xl uppercase rounded-30px"
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
/**
 * * Mobile: we need to group by each application
 * - User interface
 * - Admin interface
 * * onClick => open application page
 * * for animation they will be fast and spring to the top in view once
 *
 * ? Desktop: we need to keep each in a card that they all fit the screen size
 * * onHower we show the description and the tech stack of each app
 * * and expand the card we can keep them in accordian manner that we keep one expanded and otehr closed
 * * onClick we open the page in a smooth animative way
 *
 * ! Steps to take
 * 1. create seperate data for mobile and desktop
 * 2. render the mobile data on the screen
 */
