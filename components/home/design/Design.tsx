import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { DesignModal } from "./DesignModal";
import styles from "./design.module.scss";
import { useEffect, useRef, useState } from "react";

interface Props {
  modalContent: JSX.Element;
  description: string;
  imgSrc: string;
  tech: string[];
  title: string;
}

export const Design = ({
  modalContent,
  description,
  imgSrc,
  title,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <Image
            priority
            src={imgSrc}
            alt={`An image of the ${title} Design.`}
            width={400}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.4rem",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description} <br />
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <DesignModal
        modalContent={modalContent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        tech={tech}
      />
    </>
  );
};