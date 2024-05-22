import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import NavMobile from './mobile';
import NavDesktop from './desktop';

export function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed w-full lg:container z-1  top-0 px-4 py-2 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col"
      >
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="h-auto w-12 lg:w-15"
        />
        <span className="text-12px lg:text-sm font-light text-dark">
          Designer & Developer
        </span>
      </motion.div>
      {isDesktop ? <NavDesktop /> : <NavMobile />}
    </header>
  );
}
