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
    title: "Kishur 1",
    imgSrc: "kishur1",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Kishur 2",
    imgSrc: "kishur2",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 46",
    imgSrc: "brut46",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 42",
    imgSrc: "brut42",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Album 3",
    imgSrc: "album3",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Album 4",
    imgSrc: "album4",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Print",
    imgSrc: "print_wc05ay",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Album 5",
    imgSrc: "album5",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design T5",
    imgSrc: "t5",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "HH Design",
    imgSrc: "hh_s7xovw",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 44",
    imgSrc: "brut44",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design T4",
    imgSrc: "t4",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 43",
    imgSrc: "brut43",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 41",
    imgSrc: "brut41",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 40",
    imgSrc: "brut40",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 39",
    imgSrc: "brut39",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 38",
    imgSrc: "brut38",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Album 1",
    imgSrc: "album1",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 37",
    imgSrc: "brut37",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Album 2",
    imgSrc: "album2",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 36",
    imgSrc: "brut36",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Image 23",
    imgSrc: "23_f7mqbs",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 35",
    imgSrc: "brut35",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 34",
    imgSrc: "brut34",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design T1",
    imgSrc: "t1",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design T2",
    imgSrc: "t2",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 33",
    imgSrc: "brut33",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 2",
    imgSrc: "brut2",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design T3",
    imgSrc: "t3",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "NOiR",
    imgSrc: "insta_lkvpja",
    tech: ["Photoshop"],
    description: "I am liking it",
    modalContent: (
      <>
        <p>Soul</p>
      </>
    ),
  },
  {
    title: "MiD Night Debug",
    imgSrc: "new_efjl8c",
    tech: ["Photoshop"],
    description: "ft.",
    modalContent: (
      <>
        <p>Iam not alone</p>
      </>
    ),
  },
  {
    title: "Brutalism 32",
    imgSrc: "brut32",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Motion Blur",
    imgSrc: "a_j4depo",
    tech: ["Photoshop"],
    description: "Font Fit",
    modalContent: (
      <>
        <p>Font Fit</p>
      </>
    ),
  },
  {
    title: "DeathStar",
    imgSrc: "6_uqvjwt",
    tech: ["Photoshop"],
    description: "New Republic",
    modalContent: (
      <>
        <p>New Republic</p>
      </>
    ),
  },
  {
    title: "Brutalism 31",
    imgSrc: "brut31",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "UiX LOGO",
    imgSrc: "uixW_s4qlmn",
    tech: ["Illustrator"],
    description: "UiX modern logo",
    modalContent: (
      <>
        <p>Design that describe somethingg ...</p>
      </>
    ),
  },
  {
    title: "Brutalism 30",
    imgSrc: "brut30",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 29",
    imgSrc: "brut29",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 27",
    imgSrc: "brut27",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 28",
    imgSrc: "brut28",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 26",
    imgSrc: "brut26",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 25",
    imgSrc: "brut25",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 24",
    imgSrc: "brut24",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 23",
    imgSrc: "brut23",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 22",
    imgSrc: "brut22",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 21",
    imgSrc: "brut21",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 20",
    imgSrc: "brut20",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Design 4",
    imgSrc: "4_dojetb",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Gaurdian Angel",
    imgSrc: "gaurdian_angel2_11zon_kkzfj7",
    tech: ["Photoshop"],
    description: "The Gaurdian Angel",
    modalContent: (
      <>
        <p>MINIMAL ?</p>
      </>
    ),
  },
  {
    title: "Brutalism 19",
    imgSrc: "brut19",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 18",
    imgSrc: "brut18",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 17",
    imgSrc: "brut17",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 1",
    imgSrc: "brut1",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 16",
    imgSrc: "brut16",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 15",
    imgSrc: "brut15",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "THUNDER poster Mockup",
    imgSrc: "mockup_2-2_q33of2",
    tech: ["Photoshop"],
    description: "Realistic Poster Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Brutalism 3",
    imgSrc: "brut3",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 14",
    imgSrc: "brut14",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 6",
    imgSrc: "brut6",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 13",
    imgSrc: "brut13",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 7",
    imgSrc: "brut7",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "CHASE ATLANTiC",
    imgSrc: "chase_atlentic_copy_rtdeag",
    tech: ["Illustrator", "Photoshop"],
    description: "Lost iN Heaven-NEW ALBUM",
    modalContent: (
      <>
        <p>Using /Brutalism /Typography /VectorArt</p>
      </>
    ),
  },
  {
    title: "Brutalism 12",
    imgSrc: "brut12",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 8",
    imgSrc: "brut8",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 9",
    imgSrc: "brut9",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 11",
    imgSrc: "brut11",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 5",
    imgSrc: "brut5",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 4",
    imgSrc: "brut4",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Brutalism 10",
    imgSrc: "brut10",
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Thought Provoking",
    imgSrc: "Thought-Provoking_Illustrations_by_Sébastien_Thibault_Inspiration_Grid_yl97va",
    tech: ["Photoshop"],
    description: "Illustration",
    modalContent: (
      <>
        <p>Inspiring artwork</p>
      </>
    ),
  },
  
  
];
