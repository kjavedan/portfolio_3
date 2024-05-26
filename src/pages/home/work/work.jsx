import { motion } from 'framer-motion';
import Iconify from 'src/components/iconify/iconify';
import WorkListMobile from './work-list-mobile';

import { useResponsive } from 'src/hooks/use-responsive';

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
          <Iconify icon="pepicons-pencil:arrow-down-circle" />
        </motion.div>
        <h3 className="font-light text-3xl md:text-5xl ml-2">
          Some of my work
        </h3>
      </div>

      <div className=" mt-6">{isDesktop ? 'desktop' : <WorkListMobile />}</div>
    </div>
  );
}
