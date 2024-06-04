import PropTypes from 'prop-types';
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

export default function ProjectHeroDesktop({
  title,
  siteUrl,
  videoSrc,
  techStack,
}) {
  return (
    <div className="mt-20vh">
      <div className="flex items-center justify-between px-10">
        <h1 className="text-[--clr-text-title] text-3xl md:text-4xl xl:text-7xl  capitalize font-500">
          {title}
        </h1>
        <a className="button-primary" href={siteUrl} target="_blank">
          visit site
        </a>
      </div>

      <div className="bg-[--clr-gray-bg] h-auto rounded-30px w-full mt-4 p-8 pb-6 ">
        <video
          src={videoSrc}
          alt={title}
          muted
          controls
          autoPlay
          className="w-full rounded-30px shadow"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-3 mt-2"
      >
        {techStack?.map((stack, index) => (
          <motion.span
            variants={techStackItemVariants}
            className="bg-[--clr-gray-bg] mt-4 px-3 py-2 text-[--clr-text-body] rounded-3xl"
            key={index}
          >
            {stack}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

ProjectHeroDesktop.propTypes = {
  title: PropTypes.string,
  siteUrl: PropTypes.string,
  videoSrc: PropTypes.string,
  techStack: PropTypes.array,
};
