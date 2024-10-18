import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/phuke.jpg";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m UiX Phuke<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              {/*I&apos;m a*/} A
              <span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                    "Full stack Developer",
                    1000,
                    "Graphic Designer",
                    1000,
                  ]}
                  speed={40}
                  style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I believe in the power of encouragement—it&apos;s the driving
              force that turns dreams into reality and challenges into
              achievements. Let&apos;s connect and inspire each other to reach
              new heights!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="UiX Phuke | full stack dev"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
