import { SectionHeader } from "@/components/utils/SectionHeader";
import { Design } from "./Design";
import Masonry from "react-masonry-css";
import styles from "./design.module.scss";

export const Designs = () => {
  // Define breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1024: 2, // 2 columns for medium screens
    768: 1, // 1 column for small screens
  };

  return (
    <section id="design" className="section-wrapper">
      <SectionHeader title="Designs" dir="l" />

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.projects}
        columnClassName={styles.masonryGridColumn}
      >
        {designs.map((project) => {
          return <Design key={project.title} {...project} />;
        })}
      </Masonry>
    </section>
  );
};

// Your designs array





const designs = [
  {
    title: "BiLLiE EiLiSH-Birds of a Feather",
    imgSrc: "/design-imgs/billie eilish.png",
    tech: ["Photoshop"],
    description: "Birds of a Feather  ",
    modalContent: (
      <>
        <p>Using Typography </p>
      </>
    ),
  },
  {
    title: "Motion path",
    imgSrc: "/design-imgs/japen-girl copy.png",
    tech: ["Photoshop"],
    description: "path blur  ",
    modalContent: (
      <>
        <p>Asthetic</p>
      </>
    ),
  },

  {
    title: "Cole Palmer",
    imgSrc: "/design-imgs/colePalmer.png",
    tech: ["Photoshop"],
    description: "The chelsea starBOY ",
    modalContent: (
      <>
        <p>Using photoshop</p>
      </>
    ),
  },
  {
    title: "ANTi-CLOCK",
    imgSrc: "/design-imgs/anti-design copy.png",
    tech: ["Photoshop"],
    description: "Anti-Design ",
    modalContent: (
      <>
        <p>Using some font with typography</p>
      </>
    ),
  },
  {
    title: "Brutalism HOPE",
    imgSrc: "/design-imgs/hope copy.png",
    tech: ["Illustrator", "Photoshop"],
    description: "Brutalism  ",
    modalContent: (
      <>
        <p>Thresholdt</p>
      </>
    ),
  },
  {
    title: "PUMA AMG",
    imgSrc: "/design-imgs/amg.jpg",
    tech: ["Illustrator", "Photoshop"],
    description: "Mercedes AMG Petronas F1 Leadcat 2.0 Logo Unisex Slides ",
    modalContent: (
      <>
        <p>Using some custom grafitti font</p>
      </>
    ),
  },
  {
    title: "ADIDAS originals FORUM",
    imgSrc: "/design-imgs/forum.png",
    tech: ["Photoshop"],
    description: "FORUM snekar",
    modalContent: (
      <>
        <p>Unleash Your Creativity with Every Steps</p>
      </>
    ),
  },
  {
    title: "CHASE ATLANTiC",
    imgSrc: "/design-imgs/cA.png",
    tech: ["Illustrator", "Photoshop"],
    description: "Lost iN Heaven-NEW ALBUM",
    modalContent: (
      <>
        <p>Using /Brutalism /Typography /VectorArt </p>
      </>
    ),
  },
  {
    title: "VANS -off the wall",
    imgSrc: "/design-imgs/vans2.png",
    tech: ["Photoshop"],
    description: "Vans sneaker design ",
    modalContent: (
      <>
        <p>Design that describe somethingg ...</p>
      </>
    ),
  },
  {
    title: "UiX LOGO",
    imgSrc: "/design-imgs/uixW.png",
    tech: ["Illustrator"],
    description: "UiX modern logo ",
    modalContent: (
      <>
        <p>Design that describe somethingg ...</p>
      </>
    ),
  },
  {
    title: "UiX LOGO Mockup",
    imgSrc: "/design-imgs/booky.png",
    tech: ["Illustrator"],
    description: "MOCKUP for UiX ",
    modalContent: (
      <>
        <p>Mockup light up the branding visual status</p>
      </>
    ),
  },
  
  {
    title: "iSAGi",
    imgSrc: "/design-imgs/isagi.jpg",

    tech: ["Illustrator", "Photoshop"],
    description: "Blue Lock (Japanese: ブルーロック, Hepburn: Burū Rokku)  ",
    modalContent: (
      <>
        <p>Combination of scratch and Digital art</p>
      </>
    ),
  },
  {
    title: "SHARMi",
    imgSrc: "/design-imgs/sharmi.png",
    code: "https://www.github.com/Rohangith1/ultronix_portfolio",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",

    tech: ["Illustrator", "Photoshop"],
    description: "Design for a special t shirt",
    modalContent: (
      <>
        <p>This is very special design playing with the element</p>
        <p>Font Used : Avaleigh, Grischel, Vertikal</p>
        {/*<p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>*/}
      </>
    ),
  },
  {
    title: "UiX logo",
    imgSrc: "/design-imgs/uixLogo.jpg",

    tech: ["Illustrator", "Photoshop"],
    description: "A Logo for UiX",
    modalContent: (
      <>
        <p>Made to create some sign.</p>
      </>
    ),
  },
  {
    title: "UiX Masterclass Logo",
    imgSrc: "/design-imgs/mc.png",

    tech: ["Illustrator", "Photoshop"],
    description: "This is design for the upcoming e-learning platform",
    modalContent: (
      <>
        <p>Launching Soon.....</p>
      </>
    ),
  },
  {
    title: "adidas PREDEATOR Freak .1",
    imgSrc: "/design-imgs/preditor.png",
    tech: ["Illustrator", "Photoshop"],
    description: "Tshirt design/Predator Freak",
    modalContent: (
      <>
        <p>This is a T shirt design for adidas Predator Freak .1</p>
      </>
    ),
  },
  {
    title: "Rental Enterprise",
    imgSrc: "/design-imgs/rr.png",

    tech: ["Illustrator"],
    description: "A logo for Rental Enterprise(RE)",
    modalContent: (
      <>
        <p>Rental Enterprise is a hardware Shop with all Home applience</p>
      </>
    ),
  },
];
