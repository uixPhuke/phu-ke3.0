import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Webhood Infotech",
    position: "Javascript Developer/ Backend Developer",
    time: "Aug 2022 - October 2023",
    location: "Jamshedpur, Jharkhand IND",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Velo Javascript . Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "Wix",
      "Javasript",
      "velo",
      "Github",
    ],
  },
  {
    title: "SnSinc media",
    position: "Graphic Designer",
    time: "Nov 2024 - Going On",
    location: "Guwahati, Assam IND",
    description:
      "Creating compelling visual content for our social media channels, website, and other digital marketing materials. Staying updated on the latest design trends and technologies to ensure our work remains fresh and innovative.",
    tech: [
      "Illustrator",
      "Photoshop",
      "After Effect",
      "Davinci Resolve",
      "Premier Pro"
    ],
  }
];
