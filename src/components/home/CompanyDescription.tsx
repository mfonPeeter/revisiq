import { motion } from 'framer-motion';
import { QuoteIcon } from '../icons';

const text = `We help companies build, launch, and scale their products. We provide the strategy, technology, and talent to bring your vision to life.`;

const words = text.split(' ');

const CompanyDescription = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-7"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon className="size-10 sm:size-16 md:size-auto" />
          </motion.div>

          <div className="flex max-w-[601px] flex-wrap text-xl font-medium sm:text-2xl md:text-[28px] lg:leading-[43px]">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDescription;
