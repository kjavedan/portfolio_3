import { motion } from 'framer-motion';
import MeKhaled from './me-khaled';
import ReactFullpage from '@fullpage/react-fullpage';

const Home = () => {
  return (
    <ReactFullpage
      navigation
      credits={{ label: '© 2024 KJ. All rights reserved.' }}
      render={() => {
        return (
          <div>
            <div className="section">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-screen flex items-center justify-center px-4 lg:p-0 "
              >
                <MeKhaled />
              </motion.div>
            </div>
            <div className="section">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-screen flex items-center justify-center px-4  lg:p-0"
              >
                <h1>Another Section</h1>
              </motion.div>
            </div>
            {/* Add more sections as needed */}
          </div>
        );
      }}
    />
  );
};

export default Home;
