import "../styles/main.scss";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          initial={{scaleY:0}}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1, transition: { duration: 0.6, damping: 0 } }}
          className="transition-overlay"
        ></motion.div>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
