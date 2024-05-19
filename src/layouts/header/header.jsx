import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './menu-toggle';
import { Navigation } from './navigation';

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

  return (
    <motion.nav
      className="relative"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      {/* Background */}
      <motion.div
        className="bg-light fixed right-0 top-0 w-full h-full"
        variants={navVariants}
      >
        <Navigation />
      </motion.div>
    </motion.nav>
  );
}
