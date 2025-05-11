import { SectionHeader } from "@/components/utils/SectionHeader";
import { CDesign } from "./CDesign";
import Masonry from "react-masonry-css";
import styles from "./cdesign.module.scss";

export const CDesigns = () => {
  // Define breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1024: 2, // 2 columns for medium screens
    768: 1, // 1 column for small screens
  };

  return (
    <section id="cdesign" className="section-wrapper">
      <SectionHeader title="Client Designs" dir="l" />

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.projects}
        columnClassName={styles.masonryGridColumn}
      >
        {cdesigns.map((project) => {
          return <CDesign key={project.title} {...project} />;
        })}
      </Masonry>
    </section>
  );
};

// Your designs array
const cdesigns = [
  {
    title: "Food MOckup",
    imgSrc: "aromatic_copy_jripq6", // Cloudinary public ID
    tech: ["Photoshop"],
    description: "LUNAR-m BAR amd RESTAURANT",
    modalContent: (
      <>
        <p>Using Typography</p>
      </>
    ),
  },{
    title: "SnS",
      imgSrc: "WhatsApp_Image_2025-02-19_at_16.59.33_o7mzkt",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  
  {
    title: "Sai SHTAL",
    imgSrc: "WhatsApp_Image_2025-01-13_at_13.04.13_mwbcpo",

    tech: ["Photoshop"],
    description: "Sai sthal ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "SnS",
      imgSrc: "WhatsApp_Image_2025-03-07_at_11.55.48_enbqyg",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Sai SHTAL",
    imgSrc: "WhatsApp_Image_2025-01-17_at_12.45.42_ocrtca",

    tech: ["Photoshop"],
    description: "Sai sthal ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Sai SHTAL",
    imgSrc: "WhatsApp_Image_2025-01-16_at_16.28.49_j4hhch",

    tech: ["Photoshop"],
    description: "Sai sthal ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Sai SHTAL",
    imgSrc: "WhatsApp_Image_2025-01-16_at_16.52.41_eor6h7",

    tech: ["Photoshop"],
    description: "Sai sthal ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "LUNAR",
    imgSrc: "IG_copy_fyuvvi",
    tech: ["Photoshop"],
    description: "Website Banner",
    modalContent: (
      <>
        <p>LUNAR</p>
      </>
    ),
  },
  

  {
    title: "Marketing",
    imgSrc: "8_pgbvdk",
    tech: ["Photoshop"],
    description: "Abstract ",
    modalContent: (
      <>
        <p>SnS</p>
      </>
    ),
  },
  {
    title: "BAR",
    imgSrc: "bar_copy_rjnvzw",
    tech: ["Photoshop"],
    description: "NANDAN  ",
    modalContent: (
      <>
        <p>BAr </p>
      </>
    ),
  },
  {
    title: "MArtyrs DAY",
    imgSrc: "bapuu_bxvshx",
    tech: ["Photoshop"],
    description: "Sai Sthal ",
    modalContent: (
      <>
        <p>Sai Sthal</p>
      </>
    ),
  },
  {
    title: "MArketing",
    imgSrc: "7_uclf8l",
    tech: ["Photoshop"],
    description: "Abstract  ",
    modalContent: (
      <>
        <p>SnS</p>
      </>
    ),
  },
  {
    title: "CANAL VIEW",
      imgSrc: "WhatsApp_Image_2025-02-10_at_12.18.27_fc9x7u",
  
      tech: ["Photoshop"],
      description: "Holi",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2024-12-16_at_18.24.53_sqzoos",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Clickbait",
    imgSrc: "3_aydt27",
    tech: ["Photoshop"],
    description: "FORUM snekar",
    modalContent: (
      <>
        <p>Unleash Your Creativity with Every Steps</p>
      </>
    ),
  },
  {
    title: "Pendant",
    imgSrc: "8_copy_mu4obc",
    tech: ["Illustrator", "Photoshop"],
    description: "Website Banner",
    modalContent: (
      <>
        <p>Website </p>
      </>
    ),
  },
  {
    title: "SEEDS",
    imgSrc: "5_bhqm5k",
    tech: ["Photoshop"],
    description: "BLOOM ",
    modalContent: (
      <>
        <p>SnS</p>
      </>
    ),
  },
  {
    title: "Valentine",
    imgSrc: "valentine_copy_vh9yr1",
    tech: ["Illustrator"],
    description: "HRAA ",
    modalContent: (
      <>
        <p>VAlentine</p>
      </>
    ),
  },
  {
    title: "HOOM DECOR",
    imgSrc: "abcdefgh_u5moyt",
    tech: ["Photoshop"],
    description: "DKRAJ",
    modalContent: (
      <>
        <p>Website banner</p>
      </>
    ),
  },
  
  {
    title: "Saraswati PUJA",
    imgSrc: "WhatsApp_Image_2024-12-06_at_14.35.22_zoqyai",

    tech: ["Photoshop"],
    description: "  ",
    modalContent: (
      <>
        <p>HRAA</p>
      </>
    ),
  },
  {
    title: "MOP",
    imgSrc: "gem_stunning_copy_trrrtj",
    code: "https://www.github.com/Rohangith1/ultronix_portfolio",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",

    tech: ["Photoshop"],
    description: "Distort effect",
    modalContent: (
      <>
        <p>DKRAJ</p>
       
        {/*<p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>*/}
      </>
    ),
  },
  {
    title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2024-12-07_at_11.28.25_viijom",

    tech: ["Illustrator", "Photoshop"],
    description: "A Logo for UiX",
    modalContent: (
      <>
        <p>Made to create some sign.</p>
      </>
    ),
  },
  {
    title: "BASANTA PANCHAMI",
    imgSrc: "WhatsApp_Image_2024-12-06_at_14.39.32_iwr7c1",

    tech: [ "Photoshop"],
    description: "NANDAN",
    modalContent: (
      <>
        <p>Swaraswati Puja</p>
      </>
    ),
  },
  {
    title: "BASANTA PANCHAMI",
    imgSrc: "WhatsApp_Image_2024-12-07_at_11.55.14_t7fzfv",

    tech: [ "Photoshop"],
    description: "Canal VIEW",
    modalContent: (
      <>
        <p>Swaraswati Puja</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2024-12-10_at_13.18.30_opoqmz",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2024-12-10_at_15.44.51_e8cnmm",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-17_at_11.54.15_kis6pp",
    tech: ["Photoshop"],
    description: "Review",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2024-12-11_at_16.40.37_xkus3b",
    tech: ["Photoshop"],
    description: "Food Mockup",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-09_at_17.39.55_plt2z9",
    tech: ["Photoshop"],
    description: "Food Mockup",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-09_at_17.39.47_twnmn8",
    tech: ["Photoshop"],
    description: "Food Mockup",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-09_at_17.42.00_arjnel",
    tech: ["Photoshop"],
    description: "Food Mockup",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2024-12-12_at_17.53.23_vruzlf",
    tech: ["Photoshop"],
    description: "Food Mockup",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2024-12-12_at_15.25.59_oruvek",
    tech: ["Photoshop"],
    description: "Hall",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-09_at_11.51.47_tsn5so",
    tech: ["Photoshop"],
    description: "Bed",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2024-12-27_at_18.32.00_dkkwbm",
    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-02-14_at_12.57.28_i1ygs5",
    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-02-14_at_13.19.24_qvo7xk",
    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-02-14_at_12.00.50_aw0678",
    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-02-12_at_12.03.24_cua6jr",
    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "sl66_copy-min_cmkbnf",
    tech: ["Photoshop"],
    description: "Food",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-06_at_15.29.22_jfftvb",
    tech: ["Photoshop"],
    description: "Valentine",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-08_at_11.00.18_vijify",
    tech: ["Photoshop"],
    description: "Review",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2024-12-13_at_11.45.51_cnzzwm",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2025-02-08_at_14.01.29_l3zhtt",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2025-01-18_at_14.41.32_xtcmiy",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2025-01-21_at_11.05.52_pfjzjx",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "glow-moist-cream_cop21y_b7rk9g",

    tech: ["Photoshop"],
    description: "Mockup",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2025-01-07_at_17.52.02_vtv6xk",

    tech: ["Photoshop"],
    description: "Valentine",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },{

    title: "Beckyzote",
    imgSrc: "WhatsApp_Image_2025-01-20_at_14.09.08_vxrdeg",

    tech: ["Photoshop"],
    description: "Valentine",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },{
    title: "PLOT",
    imgSrc: "WhatsApp_Image_2025-01-07_at_18.14.51_xduttx",

    tech: ["Photoshop"],
    description: "PLOT ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2024-12-16_at_17.03.34_iy9atf",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "Hiring Poster",
    imgSrc: "WhatsApp_Image_2025-01-29_at_10.45.02_kkvcrc",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
 {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2025-01-02_at_11.13.19_mps97w",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2025-01-11_at_18.05.07_exhmlu",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2025-01-11_at_18.05.15_ojnxud",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2024-12-05_at_12.35.41_nhpt1e",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2024-12-06_at_10.39.51_qqqbct",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
  title: "CANAL VIEW",
    imgSrc: "WhatsApp_Image_2024-12-05_at_11.20.19_y0sxfk",

    tech: ["Photoshop"],
    description: "Event Poster",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  
 
  {
    title: "Hiring Poster",
    imgSrc: "WhatsApp_Image_2025-01-16_at_18.05.45_2_frq3g2",

    tech: ["Photoshop"],
    description: "BBlunt ",
    modalContent: (
      <>
        <p>Nice</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-01-17_at_12.16.59_rmzp21",
    tech: ["Photoshop"],
    description: "Review",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "NANDAN",
    imgSrc: "WhatsApp_Image_2025-03-07_at_15.16.41_bs3j5d",
    tech: ["Photoshop"],
    description: "Review",
    modalContent: (
      <>
        <p>5 star</p>
      </>
    ),
  },
  {
    title: "CANAL VIEW",
      imgSrc: "WhatsApp_Image_2025-01-11_at_17.54.03_hfimsq",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "CANAL VIEW",
      imgSrc: "WhatsApp_Image_2025-01-23_at_16.34.18_rhvtpc",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "CANAL VIEW",
      imgSrc: "serenity_copy_rsowxn",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "CANAL VIEW",
      imgSrc: "sl9_copy_rvvjui",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "CANAL VIEW",
      imgSrc: "WhatsApp_Image_2025-01-23_at_16.03.03_sprpzw",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
 
  {
    title: "CANAL VIEW",
      imgSrc: "sl3-1080_copy_hhlsco",
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "CANAL VIEW",
      imgSrc: "enjoy_a_romantic_escape_wcp2gw",
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
 
  {
    title: "HRAA",
      imgSrc: "martyrs_day_kjhxfh",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "SnS",
      imgSrc: "sns-logo-1_apd99p",
  
      tech: ["illustrator"],
      description: "Logo",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
    {
      title: "HRAA",
        imgSrc: "WhatsApp_Image_2025-03-05_at_12.54.56_gxvmyf",
    
        tech: ["Photoshop"],
        description: "Event Poster",
        modalContent: (
          <>
            <p>Nice</p>
          </>
        ),
      },
  {
    title: "HRAA",
      imgSrc: "WhatsApp_Image_2025-02-10_at_13.24.40_ftkvo8",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "Sai Sthal",
      imgSrc: "WhatsApp_Image_2025-02-18_at_12.45.37_yvkxq2",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>Nice</p>
        </>
      ),
    },
  {
    title: "Hiring",
      imgSrc: "WhatsApp_Image_2025-03-05_at_18.11.46_tili7b",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Hiring",
      imgSrc: "WhatsApp_Image_2025-03-05_at_18.11.47_njeta2",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "La Bella",
      imgSrc: "WhatsApp_Image_2025-03-07_at_15.17.03_qegxjn",
  
      tech: ["Photoshop"],
      description: "Event Poster",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Grid",
      imgSrc: "WhatsApp_Image_2025-03-11_at_17.20.04_xdpwco",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
    
  {
    title: "Website",
      imgSrc: "WhatsApp_Image_2025-03-11_at_17.20.05_aavqcc",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Website Banner",
      imgSrc: "Main_Banner_mlcqu1",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>DkRAJ</p>
        </>
      ),
    },
  
  {
    title: "Lunar",
      imgSrc: "FUTURISTIC_FrIDAY_copy_oiz0uv",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Lunar",
      imgSrc: "IG_aoqh6t",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Lunar",
      imgSrc: "celebrate_with_us_z6wnuh",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Lunar",
      imgSrc: "IG_copy_2_vjqtba",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>SnS</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "1a_y60spk",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "img_2_zg5on8",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "pavan_fxwyaw",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "v2-offer_dtbgv0",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "cricket_copy_izvprp",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Pawan Hyundai",
      imgSrc: "forest_yeo9jq",
  
      tech: ["Photoshop"],
      description: "Feb",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Laxmi Yamaha",
      imgSrc: "v2_copy_xdtofx",
  
      tech: ["Photoshop"],
      description: "Mothers Day",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Laxmi Yamaha",
      imgSrc: "11_exdcbj",
  
      tech: ["Photoshop"],
      description: "Mothers Day",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
  {
    title: "Hero",
      imgSrc: "v3_ctjmxv",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "Hero",
      imgSrc: "sai_k2q2zg",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "Hero",
      imgSrc: "2_ubdc3a",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "TVS",
      imgSrc: "v2-l_neehdm",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "TVS",
      imgSrc: "s1_k659tr",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "TVS",
      imgSrc: "v3_copy_krcdis",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hero</p>
        </>
      ),
    },
  {
    title: "Hyundai",
      imgSrc: "mothersday_hbib7d",
  
      tech: ["Photoshop"],
      description: "Poster",
      modalContent: (
        <>
          <p>Hyundai</p>
        </>
      ),
    },
    {
      title: "CANAL VIEW",
        imgSrc: "serenity_copy_rsowxn",
        tech: ["Photoshop"],
        description: "Event Poster",
        modalContent: (
          <>
            <p>Nice</p>
          </>
        ),
      },
    {
      title: "CANAL VIEW",
        imgSrc: "sl9_copy_rvvjui",
        tech: ["Photoshop"],
        description: "Event Poster",
        modalContent: (
          <>
            <p>Nice</p>
          </>
        ),
      },
    {
      title: "CANAL VIEW",
        imgSrc: "sl3-1080_copy_hhlsco",
        tech: ["Photoshop"],
        description: "Event Poster",
        modalContent: (
          <>
            <p>Nice</p>
          </>
        ),
      },
    {
      title: "CANAL VIEW",
        imgSrc: "enjoy_a_romantic_escape_wcp2gw",
        tech: ["Photoshop"],
        description: "Event Poster",
        modalContent: (
          <>
            <p>Nice</p>
          </>
        ),
      },
    
  
  
  
  
];
