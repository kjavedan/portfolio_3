import { motion } from 'framer-motion';

import NavMobile from './mobile';
import NavDesktop from './desktop';

import logoImg from 'src/assets/logo.png';
import { useResponsive } from 'src/hooks/use-responsive';

export function Header() {
  const { isDesktop } = useResponsive();

  return (
    <header className="fixed w-full lg:container z-1  top-0 p-4 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col"
      >
        <img src={logoImg} alt="logo" className="h-auto w-12 lg:w-15" />
      </motion.div>
      {isDesktop ? <NavDesktop /> : <NavMobile />}
    </header>
  );
}
