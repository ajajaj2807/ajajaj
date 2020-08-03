import React from "react";
import DopeText from "./DopeText";
import Slider from "./Slider";
import Projects from "./Projects";
import Head from "next/head";
import { useViewportScroll, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <Head>
        <title>Ajay Yadav</title>
      </Head>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { damping: 0, delay: 0.2, ease: "easeInOut" },
        }}
        className="landing-wrapper"
      >
        <span className="landing-text">
          Hello there! 👋 <br />I am{" "}
          <DopeText image="https://media.giphy.com/media/lfCTKCg4sw8rm/giphy.gif">
            Ajay
          </DopeText>
          . I like to design and develop beautiful web apps which users love to
          use. Currently, I am a student at IIT Kharagpur. Also, I cannot work
          without some music. 🎵
        </span>
        <button className="cta">Let's Talk</button>
      </motion.div>
      <Slider />
      <Projects />
      <div className="convert-wrapper">
        <span className="convert-txt">
          You help me expand this list 👆 <br /> and I'll help you build your
          product. It's that easy ;-)
        </span>
        <span className="convert-l">
          So, what are you waiting for?
          <DopeText image="https://media.giphy.com/media/rVVFWyTINqG7C/giphy.gif">
            <a href="#">Let's Talk</a>
          </DopeText>
        </span>
      </div>
      <div className="social-wrapper">
        <div className="f-r">
          Nothing to look here, you carry on
          <img
            alt="carry on, nothing to see here"
            src="https://media.giphy.com/media/L0NBGdEtE8tUP6MVwH/giphy.gif"
          />
        </div>
        <a target="_blank" href="https://www.facebook.com/ajajaj2807">
          Facebook
        </a>
        <br />
        <a target="_blank" href="https://www.instagram.com/_ajajaj_">
          Instagram
        </a>
        <br />
        <a target="_blank" href="https://www.linkedin.com/in/ajajaj2807">
          LinkedIn
        </a>
        <span className="add-info">
          SDS-348,
          <br />
          MMM Hall of Residence,
          <br />
          IIT Kharagpur, WB, IN
          <br />
          721-302 <br />
          <br />
          ajajaj2807@gmail.com
        </span>
      </div>
    </motion.div>
  );
}