import styles from "./headinglinks.module.scss";

import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/rohan-in/"
          target="_blank"
          rel="nofollow"
        >
          <FaLinkedinIn size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://x.com/rohanphuke" target="_blank" rel="nofollow">
          <BsTwitterX size="2.2rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://github.com/uixPhuke"
          target="_blank"
          rel="nofollow"
        >
          <PiGithubLogoFill size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="https://www.instagram.com/byphixel/"
          target="_blank"
          rel="nofollow"
        >
          <FaInstagram size="2.4rem" />
        </Link>
      </motion.span>

      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="https://www.youtube.com/@aluckyfinsenpai2622" target="_blank" rel="nofollow">
          <AiFillYoutube size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
