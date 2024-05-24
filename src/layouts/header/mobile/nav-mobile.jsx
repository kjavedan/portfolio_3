import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { MenuToggle } from './menu-toggle';
import { useEffect } from 'react';
import { Links } from './links';

export function NavMobile() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navVariants = {
    open: {
      clipPath: 'circle(100% at calc(100% - 43px) 35px)',
      height: window.screen.height * 2,
      transition: {
        type: 'spring',
        stiffness: 40,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(30px at calc(100% - 43px) 35px)',
      height: 'auto',
      transition: {
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
      <MenuToggle toggle={() => toggleOpen()} />

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)]"
            onClick={() => toggleOpen()}
          />
        )}
      </AnimatePresence>

      {/* Background */}
      <motion.div
        className="bg-light absolute right-0 top-0 w-full b-solid"
        variants={navVariants}
      >
        <Links />
      </motion.div>
    </motion.nav>
  );
}
