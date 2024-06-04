import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import NavMobile from './mobile';
import NavDesktop from './desktop';

import { useRouter } from 'src/hooks/use-router';
import { useLocation } from 'react-router-dom';
import { useResponsive } from 'src/hooks/use-responsive';

import logoImg from 'src/assets/logo.png';

export function Header() {
  const { isDesktop } = useResponsive();

  const [isHome, setIsHome] = useState();

  const router = useRouter();
  const location = useLocation();

  useEffect(() => {
    location.pathname !== '/' ? setIsHome(false) : setIsHome(true);
  }, [location.pathname]);

  return (
    <header
      className={`${isHome ? 'fixed' : 'relative'} bg-white z-10 w-full lg:custom-container z-1  top-0 p-4 pt-5.5 flex items-center justify-between`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: 0 }}
        className="flex flex-col cursor-pointer"
        onClick={() => router.push('/')}
      >
        <img src={logoImg} alt="logo" className="h-auto w-8 lg:w-10" />
      </motion.div>
      {isDesktop ? <NavDesktop /> : <NavMobile />}
    </header>
  );
}
