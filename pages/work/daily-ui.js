import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const pics = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      damping: 0,
      staggerChildren: 0.3,
    },
  },
};

export default function pid() {
  return (
    <div className="page-wrapper">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { damping: 0, delay: 0.2 } }}
        className="work-header"
      >
        <Link href="/">
          <a className="back-btn">Home</a>
        </Link>
        <h2 className="work-title">Daily UI</h2>
        <span className="work-des">
          Here are some shots from the Daily UI challenge
        </span>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: {delay:0.6} }}
      >
        <motion.div
          variants={pics}
          initial="hidden"
          animate="show"
          className="work-content"
        >
          <motion.img variants={pics} src="/Sign Up.png" />
          <motion.img variants={pics} src="/404.png" />
          <motion.img variants={pics} src="/Credit Card Checkout.png" />
          <motion.img variants={pics} src="/eCommerce- Single Page.png" />
          <motion.img variants={pics} src="/Landing Page.png" />
          <motion.img variants={pics} src="/User Profile.png" />
          <motion.div variants={pics} className="container">
            <img src="/Music App.png" />
            <img src="/Social Share.png" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
