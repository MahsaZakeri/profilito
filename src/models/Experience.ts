export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  project?: {
    name: string;
    link: string;
  };
}