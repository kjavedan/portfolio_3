import { motion } from 'framer-motion';
export default function MeKhaled() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <h1 className="font-500 text-6xl md:text-[100px] lg:text-[130px] xl:text-[170px] text-center">
        <span>Khaled</span>
        <span className="font-[--font-secondary] block md:inline md:pl-10">
          javdan
        </span>
      </h1>
      <div className="lg:text-xl xl:text-28px mt-4 ">
        <h2 className="text-right">
          <span className="font-light">Designer &</span>
          <span className="pl-2">Developer</span>
        </h2>
      </div>
    </motion.div>
  );
}
