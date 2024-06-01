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
            className="w-10 h-10 lg:h-12 lg:w-12 md:h-11 md:w-11"
          />
        </motion.div>
        <h3 className="font-500 text-2xl md:text-4xl ml-2 lg:ml-4">
          Some of my work
        </h3>
      </div>

      <div className="mt-6">
        {isDesktop ? <WorkListDesktop /> : <WorkListMobile />}
      </div>
    </div>
  );
}
