import { SectionHeader } from "@/components/utils/SectionHeader";
import { Design } from "./Design";
import styles from "./design.module.scss";


export const Designs = () => {
  return (
    <section id="design" className="section-wrapper">
      <SectionHeader title="Designs" dir="l" />

      <div className={styles.projects}>
        {designs.map((project) => {
          return <Design key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const designs = [
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
    title: "ADIDAS originals FORUM",
    imgSrc: "https://drive.google.com/uc?export=view&id=19hr3joeZCSjfAbb9QhWLmoE5KuDqvUmb",
    tech: ["Photoshop"],
    description: "FORUM snekar",
    modalContent: (
      <>
        <p>Unleash Your Creativity with Every Steps</p>
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
