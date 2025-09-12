import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { DesignModal } from "./DesignModal";
import styles from "./design.module.scss";
import { useEffect, useRef, useState } from "react";
import CloudinaryImage from "../../utils/cloudinary";

interface Props {
  modalContent: JSX.Element;
  description: string;
  imgSrc: string; // This will now be the Cloudinary public ID
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
          <CloudinaryImage
            publicId={imgSrc} // Use the Cloudinary public ID
            alt={`An image of the ${title} Design.`}
            width={400}
            height={500}
          />
        </div>
      </motion.div>
      <DesignModal
        modalContent={modalContent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        tech={tech}
        description={description}
      />
    </>
  );
};