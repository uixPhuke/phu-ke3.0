import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Foodeyez",
    imgSrc: "/project-imgs/foodeyez.png",
    code: "#",
    projectLink: "https://www.foodeyez.com/",
    tech: ["wix", "Javascript", "velo"],
    description: "A resturant Web Application with online order.",
    modalContent: (
      <>
        <p>
          Worked as a back-end developer and created dynamic server side
          implementation.
        </p>
        <p>The tech stack is based on wix with the custom Javascript code.</p>
      </>
    ),
  },
  {
    title: "UiX E-Commerce Website",
    imgSrc: "/project-imgs/store.png",
    code: "#",
    projectLink: "https://uix-store.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind css"],
    description: "This is the UiX official Website",
    modalContent: (
      <>
        <p>
          Worked as a MERN Stack developer and created dynamic server side and
          client side implementation aso strong UI
        </p>
        <p>
          Utilized MongoDB for efficient data storage and retrieval, and
          implemented secure user authentication and authorization features to
          manage user accounts and transactions.
        </p>
      </>
    ),
  },
  {
    title: "School management system",
    imgSrc: "/project-imgs/school.png",
    code: "https://www.github.com/Rohangith1",
    projectLink: "#",
    tech: ["Python", "Django", "sqlite", "Laravel"],
    description:
      "This is a school/college management system with full functionality ",
    modalContent: (
      <>
        <p>
          Worked on full stack developement and created full functionality to
          Admin, Teacher and Student panel
        </p>
        <p>
          The tech stack is based on Python with Django framework, connected to
          a Laravel backend, with data stored in sqlite.
        </p>
      </>
    ),
  },
  {
    title: "MERN Memory GAME",
    imgSrc: "/project-imgs/mg.png",
    code: "https://www.github.com/Rohangith1/React-Game",
    projectLink: "https://mguix.vercel.app/",
    tech: ["React", "Node", "Express", "Tailwind", "MongoDB", "JWT"],
    description:
      "A fun and interactive memory card game built using MERN stack and Tailwind CSS. The game tests your memory by flipping and matching pairs of cards. It includes user authentication, score tracking, and a real-time leaderboard. ",
    modalContent: (
      <>
        <p>
          Worked on full stack developement and created full functionality to
          Register,Login,Play, Ranking
        </p>
        <p>
          User authentication with JWT . Confetti animation for new high scores
        </p>
      </>
    ),
  },
  {
    title: "ULTRONiX",
    imgSrc: "/project-imgs/uix.png",
    code: "https://www.github.com/Rohangith1/ultronix_portfolio",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",
    projectLink: "https://storied-cat-4c7742.netlify.app/",
    tech: ["React", "Tailwind", "Vite"],
    description:
      "A portfolio website using Vite js and re-worked using Reactjs.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer for this web application. Integrated
          api&apos;s, Created dynamic and reusable components.
        </p>
        <p>I work primarily on the frontend.</p>
        {/*<p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>*/}
      </>
    ),
  },
  {
    title: "UiX Masterclass",
    imgSrc: "/project-imgs/masterclass.png",
    code: "https://www.github.com/Rohangith1/ultronix_masterclass",
    projectLink:
      "https://668291e17dc54015f55780c0--grand-palmier-2475f7.netlify.app/",
    tech: ["React", "Tailwind", "Vite"],
    description:
      "UiX Masterclass is upcoming e-learning platform to learn MERN stack, DSA etc.",
    modalContent: (
      <>
        <p>
          UiX Masterclass is upcoming e-learning platform to learn MERN stack,
          DSA ,Adobe Illustrator to driving to next Gen.
        </p>
        <p>
          This is a very adv. upcoming project that i made using React futher
          Node.js will implementated for full stack
        </p>
      </>
    ),
  },
  {
    title: "V1 of my Portfolio",
    imgSrc: "/project-imgs/port.png",
    code: "https://www.github.com/Rohangith1/2k21-portfolio",
    projectLink: "https://2k21-portfolio.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"],
    description: "This is a basic portfolio site with full responsiveness",
    modalContent: (
      <>
        <p>
          This is another self project that i have build to showcase my skill
          earlier in 2k21.
        </p>
        <p>pure HTML, CSS and JS landing page.</p>
      </>
    ),
  },
  {
    title: "Portfolio v.2",
    imgSrc: "/project-imgs/port-2.png",
    code: "https://github.com/Rohangith1/portfoliiio_uix",
    projectLink: "https://joyful-mochi-1021a5.netlify.app/",
    tech: ["React", "Tailwind", "Vite"],
    description: "First Portfolio Made with React JS",
    modalContent: (
      <>
        <p>
          This is my second version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>
          Trying out React components and creating my second version of
          portfolio
        </p>
      </>
    ),
  },
  {
    title: "Restaurant Reservation",
    imgSrc: "/project-imgs/restaurant.png",
    code: "https://github.com/Rohangith1/uix_project",
    projectLink: "#",
    tech: ["PHP", "JS", "MySQL"],
    description: "Restaurant Reservation full stack Project",
    modalContent: (
      <>
        <p>Restaurant Reservation full stack Project to exploring PHP</p>
        <p>First step for learning PHP and working with database</p>
      </>
    ),
  },
  {
    title: "uixcont (YT clone)",
    imgSrc: "/project-imgs/uixcont.png",
    code: "https://github.com/Rohangith1/uixcont",
    projectLink: "https://uixcont.vercel.app/",
    tech: ["React", "Tailwind", "Redux"],
    description: "first cloning app ",
    modalContent: (
      <>
        <p>This is YT clone application to laern working with API</p>
        <p>Trying out React components and exploring Api content</p>
      </>
    ),
  },
];
