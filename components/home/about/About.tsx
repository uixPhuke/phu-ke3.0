import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              <span className={styles.linkColor}>Khuptang!</span> I&apos;m
              <span className={styles.linkColor}> Ruhon Borah</span>, and
              I&apos;m a Bachelor of Science in Information Technology graduate
              with <span className={styles.linkColor}>8.21 CGPA</span>
              <br />
              <br />I have experience working in web development worlds, with a
              focus on frontend also backend development. I&apos;m passionate
              about creating beautiful, responsive websites that provide a great
              user experience.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include HTML, CSS, JavaScript, and various frontend
              frameworks like React and Vite.js. I&apos;ve also worked with
              backend technologies like Node.js, MongoDB and PHP/Laravel ,
              allowing me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy digital painting. I believe that
              work of art is crucial for staying productive and motivated. So,
              yeah Im a noob graphic designer too..
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
