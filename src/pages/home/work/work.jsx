import { motion } from 'framer-motion';
import Iconify from 'src/components/iconify/iconify';
import WorkListMobile from './work-list-mobile';

import { useResponsive } from 'src/hooks/use-responsive';
import WorkListDesktop from './work-list-desktop';

export default function Work() {
  const { isDesktop } = useResponsive();

  return (
    <div className="w-full">
      <div className="flex items-center justify-right">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 25 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center"
        >
          <Iconify
            icon="pepicons-pencil:arrow-down-circle"
            className="w-10 h-10 md:h-12 md:w-12 lg:h-15 lg:w-15"
          />
        </motion.div>
        <h3 className="font-light text-3xl md:text-5xl lg:text-7xl ml-2 lg:ml-4">
          Some of my work
        </h3>
      </div>

      <div className="mt-6 lg:mt-10">
        {isDesktop ? <WorkListDesktop /> : <WorkListMobile />}
      </div>
    </div>
  );
}
