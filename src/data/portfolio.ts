import profileData from "./profile.json";
import projectData from "./projects.json";
import experienceData from "./experiences.json";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  isTemplate?: boolean;
};
export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  contribution: string;
  tags: string[];
  images: ProjectImage[];
  links: { label: string; href: string }[];
};

export type Experience = {
  id: string;
  company: string;
  mark: string;
  markStyle: string;
  previewCompany: string;
  previewPeriod: string;
  previewRole?: string;
  role: string;
  period: string;
  type: string;
  location: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

export type Profile = {
  name: string;
  nickname: string;
  role: string;
  location: string;
  linkedin: string;
  portrait: string | null;
  summary: string;
  statement: string[];
  coordinates: string;
  focusAreas: string[];
};

export const profile: Profile = profileData;
export const projects: Project[] = projectData;
export const experiences: Experience[] = experienceData;
export const currentExperience = experiences.find(
  (experience) => experience.current,
);
