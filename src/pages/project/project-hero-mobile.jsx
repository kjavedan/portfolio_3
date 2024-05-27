import { motion } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const techStackItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

export default function ProjectHeroMobile() {
  const data = {
    path: 'chikrice',
    title: 'chikrice',
    siteUrl: 'https://jojooshop.com',
    techStack: ['React.js', 'MUI', 'Vue.js'],
    description:
      'ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ',
    designImages: [],
    problemAndSolution: {
      problem: '',
      solution: '',
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className=" mt-30vh "
    >
      <h1 className="uppercase project-sections__title">chikrice</h1>
      <div className="bg-[--clr-gray-bg] h-80vh w-full rounded-30px mt-2"></div>
      <button className="button-primary mt-4">visit site</button>
      <div className="mt-40">
        <h3 className="project-sections__title">Tech Stack</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mt-2"
        >
          {data.techStack.map((stack, index) => (
            <motion.span
              variants={techStackItemVariants}
              className="bg-[--clr-gray-bg] px-3 py-2 text-[--clr-text-body] rounded-3xl"
              key={index}
            >
              {stack}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
