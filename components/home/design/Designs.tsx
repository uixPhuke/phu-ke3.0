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
    title: "image",
    imgSrc: "main_zznp9b", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "22_xtcbd0", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "main_eruru9", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "23_f7mqbs", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "32_udijby", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "japen_copy_x56zfl", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "main_r2qqdz", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "sssdc_lmpvdd", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "gg_kxx7ys", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "Untitled-1_05_ykt4ub", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "peaks_vw7ugl", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FW_Glued_Poster_copy_fcglwn", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "album_copy_l4nbq6", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "vintage-tee-back_copy_2_znpneb", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FW_Retro_Smart_Device_copy_nsqsnj", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "8-Track-Cartridge-S_copy_ftxh4e", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FW_Slim_Case_copy_unczgl", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "11psd_d0skqm", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "lachit-lotighoti_fxpwnh", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "5kg_copy_jxkggi", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "linkdin-banner_copy_r890rd", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "reg_copy_m3jufz", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "tears_copy_imn7mg", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "sns-logo-1_apd99p", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "WhatsApp_Image_2025-02-17_at_16.12.10_rlzqar", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "Vinyl_Record_Mockup_01_S_copy_nnkrqt", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "abyaantrix_copy_ih3upi", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "hh_s7xovw", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "vintage-tee-back_copy_yendm6", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FW_Slim_Case_copy_ivotoe", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FUTURISTIC_CD_CASE_MOCKUP_DESIGN_SYNDROME_copy_mv7y9f", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "FUTURISTIC_CD_CASE_weMOCKUP_DESIGN_SYNDROME_copy_jd98xk", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
  {
    title: "image",
    imgSrc: "bulbfish_vinyl_mockup_scennnne_copy_vm5yqd", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "base",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },
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
    title: "client",
    imgSrc: "hh_bbm4z1",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "glamour_zb2uev",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "creta_renlt0",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "forest_cimayi",
    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "glamour_2_gaukgt",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "harly_nyzhfx",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "77_copy_2_cna4xk",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },{
    title: "Motion Blur",
    imgSrc: "a_j4depo",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Font Fit</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-03-07_at_11.55.48_enbqyg",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "Main_Banner_mlcqu1",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "pawan-h_dyzmyx",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "7770_copy_gyx3fe",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "allMT_copy_g9yycm",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "monsoon_dow2bc",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-03-11_at_17.20.05_aavqcc",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "hd_ntotna",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-03-11_at_17.20.04_xdpwco",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "xtremye_copy_ei1yyy",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "xtreme_g9y4ic",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "mt-15_g8aefw",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-01-18_at_14.41.32_xtcmiy",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "m-hd_copy_hz95zw",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "JJJ_xflscz",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-01-17_at_12.45.42_ocrtca",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "image_s6mtml",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "cricket_copy_izvprp",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "WhatsApp_Image_2025-01-17_at_12.45.42_ocrtca",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "250r_copy_zmbtyj",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "vinayak_2_scp7na",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "r15v4_copy_ebisod",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "client",
    imgSrc: "pavan_2_hsscbj",

    tech: ["Photoshop"],
    description: "Typography",
    modalContent: (
      <>
        <p>Client project</p>
      </>
    ),
  },
  {
    title: "Equus",
    imgSrc: "sideView-kisur-1kg_copy_wpez5c",

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
  {
    title: "MiD Night Debug",
    imgSrc: "new_efjl8c",

    tech: ["Photoshop"],
    description: "ft. ",
    modalContent: (
      <>
        <p>Iam not alone </p>
      </>
    ),
  },
  {
    title: "Coming...",
    imgSrc: "jist-tech-fest_xscopy_ijzghg",

    tech: ["Photoshop"],
    description: "revealing ",
    modalContent: (
      <>
        <p>No desc </p>
      </>
    ),
  },
  {
    title: "Hard Noard",
    imgSrc: "T_m4blmf",

    tech: ["Photoshop"],
    description: "Hard pressed",
    modalContent: (
      <>
        <p>No desc </p>
      </>
    ),
  },
  {
    title: "byphixel New LOgo",
    imgSrc: "new-logo_krnswr",

    tech: ["Photoshop, Illstrator"],
    description: "bitmap Effect",
    modalContent: (
      <>
        <p>Loaded</p>
      </>
    ),
  },
  {
    title: "Kishur Logo",
    imgSrc: "kishur-Logo_osmroe",

    tech: ["Illstrator"],
    description: "Organic brand",
    modalContent: (
      <>
        <p>Launching Soon </p>
      </>
    ),
  },
  {
    title: "kkum LOGO",
    imgSrc: "kkum-logo_nfgznc",

    tech: ["Illstrator"],
    description: "Clothing Brand",
    modalContent: (
      <>
        <p>Not release </p>
      </>
    ),
  },
  {
    title: "Shine",
    imgSrc: "3d_copy_tvaggc",

    tech: ["PhotoShop"],
    description: "Texture",
    modalContent: (
      <>
        <p>Not release </p>
      </>
    ),
  },
  
  {
    title: "BLOOM",
    imgSrc: "test_ssnj2f",

    tech: ["PhotoShop"],
    description: "Bitmap ",
    modalContent: (
      <>
        <p>Dithering </p>
      </>
    ),
  },
  
// {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-8_q4bgon",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-5_lypzae",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_20_bxtir0",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-7_pwvvrc",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-3_aaenls",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-6_wgddv1",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-4_w1olle",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
//   {
//     title: "STReT x GRAFiTi",
//     imgSrc: "Full_20collection_20-_20Street_20signs_20-_20I_E2_80_99ve_20put_20it_20in_20the_20louvre_20_20_20Really_20love_20these_20mock-ups_2C_20what_20do_20you_20think_20guys_20And_20let_20me_20know_20fav_20sign_2C_20just_20put_20the_20number_20in_20the_-2_kiwsbl",

//     tech: ["illustrator"],
//     description: "Chromic effect ",
//     modalContent: (
//       <>
//         <p>Kinda like it </p>
//       </>
//     ),
//   },
  {
    title: "STReT x GRAFiTi",
    imgSrc: "mockup-j_eax2n4",

    tech: ["illustrator"],
    description: "Chromic effect ",
    modalContent: (
      <>
        <p>Kinda like it </p>
      </>
    ),
  },
  {
    title: "STReT x GRAFiTi",
    imgSrc: "Main-comp_e3wp0z",

    tech: ["illustrator"],
    description: "Chromic effect ",
    modalContent: (
      <>
        <p>Kinda like it </p>
      </>
    ),
  },
  
];
