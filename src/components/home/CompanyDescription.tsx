import { motion } from 'framer-motion';
import { QuoteIcon } from '../icons';

const CompanyDescription = () => {
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="mr-4">
            <QuoteIcon />
          </div>
          <div className="max-w-[601px] text-[28px] font-medium leading-[43px]">
            We help companies build, launch, and scale their products. We
            provide the strategy, technology, and talent to bring your vision to
            life.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDescription;
