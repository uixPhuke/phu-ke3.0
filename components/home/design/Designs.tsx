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
    imgSrc: "billie_eilish_hqaxdl", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "Birds of a Feather",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "Motion path",
    imgSrc: "japen-girl_copy_rer5t2",
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
    imgSrc: "colePalmer_nzcc2t",
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
    imgSrc: "anti-design_copy_fgwvac",
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
    imgSrc: "hope_copy_wbh00g",
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
    imgSrc: "amg_jxjybv",
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
    imgSrc: "forum_viuqlq",
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
    imgSrc: "chase_atlentic_copy_rtdeag",
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
    imgSrc: "vans3_lhu2p3",
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
    imgSrc: "uixW_s4qlmn",
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
    imgSrc: "booky_oh57oc",
    tech: ["Photoshop"],
    description: "MOCKUP for UiX ",
    modalContent: (
      <>
        <p>Mockup light up the branding visual status</p>
      </>
    ),
  },
  
  {
    title: "THUNDER Font",
    imgSrc: "thunder_copy_tcnbxz",

    tech: ["Photoshop"],
    description: "  ",
    modalContent: (
      <>
        <p>Design Using only one Font</p>
      </>
    ),
  },
  {
    title: "Walpaper",
    imgSrc: "walpaper_jm2k0u",
    code: "https://www.github.com/Rohangith1/ultronix_portfolio",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",

    tech: ["Photoshop"],
    description: "Distort effect",
    modalContent: (
      <>
        <p>Walpaper for Mac</p>
       
        {/*<p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>*/}
      </>
    ),
  },
  {
    title: "UiX logo",
    imgSrc: "uixLogo_crvbth",

    tech: ["Illustrator", "Photoshop"],
    description: "A Logo for UiX",
    modalContent: (
      <>
        <p>Made to create some sign.</p>
      </>
    ),
  },
  {
    title: "Glass",
    imgSrc: "glass_abh2cs",

    tech: [ "Photoshop"],
    description: "The Cool Glass",
    modalContent: (
      <>
        <p>Wanna Know How !</p>
      </>
    ),
  },
  {
    title: "KiM YO JONG",
    imgSrc: "2_j1xvww",

    tech: ["Photoshop"],
    description: "Cool effect",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Nun",
    imgSrc: "Demon_copy_kcu73z",
    tech: ["Photoshop"],
    description: "Demonic Nun",
    modalContent: (
      <>
        <p>The Art of Darkness</p>
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
    title: "GITHUB BANNER",
    imgSrc: "github_banner_copy_hnvweb",

    tech: ["Photoshop"],
    description: "Anti-Design",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  
  
  {
    title: "Gaurdian Angel",
    imgSrc: "gaurdian_angel2_11zon_kkzfj7",

    tech: ["Photoshop"],
    description: "The Gaurdian Angel ",
    modalContent: (
      <>
        <p>MINIMAL ?</p>
      </>
    ),
  },
  {
    title: "Life of a Graphic Designer",
    imgSrc: "phixel_rqfynl",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>How you compete That</p>
      </>
    ),
  },
  {
    title: "EQUUS",
    imgSrc: "dd_gs0jb5",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Text-Effect Look cool Ha?</p>
      </>
    ),
  },
  {
    title: "The Visionary Den",
    imgSrc: "Fdf_gmbke0",

    tech: ["Photoshop"],
    description: "Thinking",
    modalContent: (
      <>
        <p>Not soo Good</p>
      </>
    ),
  },
  
  {
    title: "Motion Blur",
    imgSrc: "a_dkm5wg",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Font : Fit</p>
      </>
    ),
  },
  {
    title: "Taylor-The Creator",
    imgSrc: "taylor_the_craetor_copy_t7wlau",

    tech: ["Photoshop"],
    description: "Texture",
    modalContent: (
      <>
        <p>Loop of his song</p>
      </>
    ),
  },
  {
    title: "Equus",
    imgSrc: "xaz_bbxbpy",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>West World</p>
      </>
    ),
  },
  {
    title: "Escape",
    imgSrc: "escape_jtf09b",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Window to heaven</p>
      </>
    ),
  },
  {
    title: "Raven",
    imgSrc: "raven_copy_vjr9cd",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Spooky Town</p>
      </>
    ),
  },
  {
    title: "Desi.gn",
    imgSrc: "abc_f95cbq",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Si-fi fun</p>
      </>
    ),
  },
  {
    title: "Atlus",
    imgSrc: "hack_gzgzmg",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Code Atlas</p>
      </>
    ),
  },
  {
    title: "DeathStar",
    imgSrc: "6_qo6xok",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>New Republic</p>
      </>
    ),
  },
 
  {
    title: "Glass Effect Distortion",
    imgSrc: "trick_votssr",

    tech: ["Photoshop"],
    description: "Glass effect",
    modalContent: (
      <>
        <p>Cool  right?</p>
      </>
    ),
  },
  {
    title: "Liqufity",
    imgSrc: "3_gnsyze",

    tech: ["Photoshop"],
    description: "Text liquify",
    modalContent: (
      <>
        <p>Liquify and Gradient</p>
      </>
    ),
  },
  {
    title: "Nike Cover",
    imgSrc: "nike_copy_wix8jr",

    tech: ["Illustrator","Photoshop"],
    description: "Nike Cover plastic wrap",
    modalContent: (
      <>
        <p>Texture / Distort</p>
      </>
    ),
  },
  {
    title: "Anti Design",
    imgSrc: "cutout_copy_bdgpb2",

    tech: ["Photoshop"],
    description: "Cut out and cut out",
    modalContent: (
      <>
        <p>Anti Design/ </p>
      </>
    ),
  },
  {
    title: "Lost and FOUND",
    imgSrc: "bookk_hg4pt9",

    tech: ["Photoshop"],
    description: "Old book",
    modalContent: (
      <>
        <p>Old Book Memory </p>
      </>
    ),
  },
  {
    title: "NOiR",
    imgSrc: "insta_lkvpja",

    tech: ["Photoshop"],
    description: "I am liking it ",
    modalContent: (
      <>
        <p>Soul</p>
      </>
    ),
  },
];
