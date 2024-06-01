import { motion } from 'framer-motion';
import Iconify from 'src/components/iconify/iconify';

import { useResponsive } from 'src/hooks/use-responsive';

export default function AboutMe() {
  const { isDesktop } = useResponsive();

  const myHobbies = [
    'Prayirrng 🕌',
    'Cooking 🥗🍢🍳',
    'working out 🏋️‍♂️',
    'Learning new things 🎼',
    'Running on the beach 🏃‍♂️🏖️',
    'Reading about business 📚',
    'Day dreaming about my goals 🤔',
    'Playing football with my friends ⚽️',
    'Talking with my family and friends 👩‍👧‍👦',
  ];

  const parentVariants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-right">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: isDesktop ? 50 : -15 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center"
        >
          <Iconify
            icon="pepicons-pencil:arrow-down-circle"
            className="w-12 h-12 lg:h-12 lg:w-12 md:h-11 md:w-11"
          />
        </motion.div>
        <h3 className="font-500  text-2xl md:text-4xl lg:text-5xl ml-3 lg:ml-4">
          When I’m not coding you will find me
        </h3>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 bg-[--clr-gray-bg] px-4 py-8 lg:px-10 rounded-3xl flex flex-col gap-4"
      >
        {myHobbies.map((hobby, index) => (
          <motion.p
            variants={itemVariants}
            key={index}
            className="font-light text-[--clr-text-body] text-sm md:text-lg"
          >
            {hobby}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
