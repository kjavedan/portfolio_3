import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { MenuToggle } from './menu-toggle';
import { Navigation } from './navigation';
import { useEffect } from 'react';

export function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navVariants = {
    open: {
      clipPath: 'circle(100% at calc(100% - 40px) 40px)',
      height: window.screen.height * 2,
      transition: {
        type: 'spring',
        stiffness: 40,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(30px at calc(100% - 40px) 40px)',
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
    <motion.nav
      className="relative b-solid"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
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
        className="bg-light fixed right-0 top-0 w-full md:w-200 h-full"
        variants={navVariants}
      >
        <Navigation />
      </motion.div>
    </motion.nav>
  );
}
