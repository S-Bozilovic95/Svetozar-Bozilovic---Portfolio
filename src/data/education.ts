import type { Course, SkillGroup } from "../types/content";
import { media } from "../utils/media";

// Certificate images are in public/media/certs, and the links point to the credentials on Udemy
export const courses: Course[] = [
  {
    title: "React - The Complete Guide",
    provider: "Udemy",
    certificateImage: media("certs/react.webp"),
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-e6287b2c-579d-49ae-9b72-f2aa399826ff.jpg",
  },
  {
    title: "Understanding TypeScript",
    provider: "Udemy",
    certificateImage: media("certs/typescript.webp"),
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-7ebf803d-436a-4ab8-b507-83e3f4c8117c.jpg",
  },
  {
    title: "Claude Code - The Practical Guide",
    provider: "Udemy",
    certificateImage: media("certs/claude-code.webp"),
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-320a5e8a-f139-4d5d-baed-8604b48d5b85.jpg",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Core",
    items: "JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5, CSS3/SCSS, Electron.js",
  },
  {
    label: "Data and state",
    items: "WebSockets, REST APIs, TanStack Query, Axios, Redux Toolkit, MobX, Zustand",
  },
  {
    label: "UI and forms",
    items:
      "MUI, Tailwind CSS, Styled Components, Bootstrap, BEM, React Hook Form, Formik, Zod, Yup",
  },
  {
    label: "Testing and tools",
    items:
      "Vitest, Jest, React Testing Library, Git, GitHub, GitLab CI/CD, Swagger, Jira, Figma, Claude Code",
  },
  {
    label: "Languages",
    items: "English (full professional), Serbian (native)",
  },
];
