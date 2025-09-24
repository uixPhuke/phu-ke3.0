import styles from "./stats.module.scss";

import { Reveal } from "@/components/utils/Reveal";
import { SiFrontendmentor } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaTerminal size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>

            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Vuejs</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Shadecn</span>

            <span className="chip">MongoDB</span>

            <span className="chip">GitHub</span>
            <span className="chip">Vercel</span>
            <span className="chip">Render</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <SiFrontendmentor size="2.4rem" color="var(--brand)" />
            <span>Enjoy casually with</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TailwindGradient</span>
            <span className="chip">Farmer</span>
            <span className="chip">React animation</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Photoshop</span>
            <span className="chip">Illustrator</span>
            <span className="chip">After Effect</span>
            <span className="chip">Davinci Resolve</span>
            <span className="chip">Premier Pro</span>

           
            <span className="chip">Laravel</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
