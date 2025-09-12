import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            <q>
              Be a <span>dataBase</span> and Follow <span>ACID</span> props. Pass
               under the Supervision of <span>Third Eye</span>.
            </q>
          </p>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have something in mind? Feel free to email me to connect! I&apos;m
            also available on
            <Link
              href="https://www.linkedin.com/in/rohan-in/"
              target="_blank"
              rel="nofollow"
            >
              {" "}
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://x.com/rohanphuke"
              target="_blank"
              rel="nofollow"
            >
              Twitter(X)
            </Link>{" "}
            if you prefer.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:rohanuix@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
