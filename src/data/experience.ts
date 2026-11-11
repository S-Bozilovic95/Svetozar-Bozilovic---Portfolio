import type { Job } from "../types/content";
import { media } from "../utils/media";

const anteklab: Job = {
  id: "anteklab",
  company: "Anteklab",
  shortName: "Anteklab",
  nameSuffix: " · Aylook",
  logo: media("logos/anteklab.png"),
  startLabel: "04/2023",
  endLabel: "present",
  role: "Frontend / React Developer",
  kind: "Aylook project",
  lead: "I started as a React developer on Aylook, a video surveillance system, and soon owned whole features such as logistics and statistics, working with the backend team to deploy them. In the last six months, next to my development work, I also took on coordination, helping clients, the helpdesk, the owner and the developers talk to each other.",
  rows: [
    {
      title: "ASC",
      text: "Desktop app for live and recorded video, alarms and access control.",
      tag: "Read",
      href: "#asc",
    },
    {
      title: "Internal tools",
      text: "AyCloud, HWTester and Ketna.",
      tag: "Read",
      href: "#other",
    },
    {
      title: "Coordination",
      text: "Bug reports, tickets and production issues.",
      tag: "Read",
      href: "#other",
    },
  ],
  links: [
    { label: "Anteklab", href: "https://antek.it/" },
    { label: "Aylook", href: "https://aylook.com/" },
  ],
  projects: [
    {
      id: "asc",
      title: "ASC",
      navLabel: "ASC",
      intro:
        "ASC (Aylook Security Control) is the main app of Aylook, the video surveillance system made by Anteklab. Operators use it on industrial plants, warehouses and logistics yards to watch cameras, search recordings and react to alarms.",
      body: "It is a cross-platform desktop app built with Electron and React, with Material UI for the interface. It runs on Windows, Linux and macOS, updates itself, and speaks Italian and English.",
      points: [
        "Live video from many cameras at once, up to 64 per device",
        "Recorded video on a timeline with alarm and motion markers",
        "Real-time events over WebSockets: people and vehicles moving, intrusions, alarms, filtered by type",
        "Interactive site maps with cameras and alarm panels",
        "A statistics dashboard and a warehouse tracking view, both described below",
      ],
      facts: [
        { value: "64", label: "cameras per device" },
        { value: "3", label: "operating systems" },
        { value: "2023", label: "on the project since" },
      ],
      legend: [
        {
          title: "Two features of my own",
          text: "I built the statistics dashboard and the warehouse tracking view from the first talk with the backend team to the release, and I support them after it.",
        },
        {
          title: "Work across the whole app",
          text: "New functions, bug fixes, the branding page, and some functions of the site maps, which were a team effort.",
        },
        {
          title: "Shared parts",
          text: "Reusable components used across Aylook products, charts, data tables, infinite scroll, filters and file uploads.",
        },
      ],
      chips: ["React", "JavaScript", "Electron", "Material UI", "WebSockets", "GitLab CI/CD"],
      sideMedia: [
        {
          type: "image",
          src: media("asc/asc-main.webp"),
          alt: "ASC main view with the camera list, live video and timeline",
          caption: "The main view: camera list on the left, live video, and the timeline below it.",
        },
        {
          type: "image",
          src: media("asc/asc-2.webp"),
          alt: "ASC playback with timeline and alarm markers",
          caption: "Playback with the timeline and alarm markers.",
        },
        {
          type: "image",
          src: media("asc/asc-3.webp"),
          alt: "ASC showing an alarm detection on the video",
          caption: "An alarm detection drawn on the video.",
        },
        {
          type: "image",
          src: media("asc/asc-4.webp"),
          alt: "ASC with the camera list and filtered events",
          caption: "Camera list on the left, filtered events on the right.",
        },
        {
          type: "image",
          src: media("asc/asc-5.webp"),
          alt: "ASC showing several cameras and the event list",
          caption: "Several cameras at once, next to the event list.",
        },
      ],
    },
    {
      id: "dashboard",
      title: "Diagnostics and statistics dashboard",
      navLabel: "Dashboard",
      intro:
        "A device collects a lot of technical data, and raw numbers are almost useless. I built the page that shows where something is wrong, quickly. I was the main developer from the API agreement with the backend to release and support.",
      body: "The data covers CPU load, memory, temperatures, disks, network, streaming, camera status, alarms and motion. The user picks the time range, for example one day or one week, and sets the auto refresh.",
      points: [
        "Tabs for Overview, System, Cameras, Monitor, Connections, Streaming and Integrations",
        "Live device health: RAM, CPU, network and temperature over WebSockets",
        "Hardware pages: CPU, memory, motherboard, disks, archive, network and modules",
        "Camera status and alarm events per camera, over the chosen time range",
        "Motion and alarm heatmaps drawn over the camera image",
      ],
      sideMedia: [
        {
          type: "image",
          src: media("stats/stats-heatmap-1.webp"),
          alt: "Motion and alarm heatmaps with recognition charts",
          caption:
            "Heatmaps: the motion and alarm focus maps are drawn over the camera image and show where things happen most, next to the recognitions as donut and bar charts.",
        },
      ],
      legend: [
        {
          title: "The backend decides the layout",
          text: "The server sends which tabs, charts and tables to show, and where. A new chart appears in ASC without frontend work.",
        },
        {
          title: "About 70 charts",
          text: "Pie, bar, timeline and heatmap, drawn on the server, with motion, alarm and vehicle events.",
        },
        {
          title: "Live device health",
          text: "CPU, RAM, temperature and network over WebSockets, with the UI kept smooth.",
        },
      ],
      media: [
        {
          type: "image",
          src: media("stats/stats-1.webp"),
          alt: "Dashboard overview with usage data and system state",
          caption:
            "Overview: the detected motion, alarm events and accesses in the chosen period, with a breakdown by event type, and live tiles for RAM, CPU, both network cards and temperature.",
        },
        {
          type: "image",
          src: media("stats/stats-2.webp"),
          alt: "Dashboard page with device information",
          caption:
            "Hardware and system details: system info, firmware, the installed modules and the devices connected to the machine, such as network cards, the UPS and the watchdog.",
        },
        {
          type: "image",
          src: media("stats/stats-3.webp"),
          alt: "Dashboard resource usage charts",
          caption:
            "Resource usage over time: CPU usage for every core, the system load averaged over 1, 5 and 15 minutes, and the temperature history.",
        },
        {
          type: "image",
          src: media("stats/stats-6.webp"),
          alt: "Dashboard disks and temperature",
          caption:
            "Disks and temperature: the list of disks with their type, model, size and firmware, and a temperature chart for the archive disks and the system disk. Serial numbers and models are blurred.",
        },
        {
          type: "image",
          src: media("stats/stats-4.webp"),
          alt: "Dashboard camera status and alarms",
          caption:
            "Camera status: a timeline shows, for the whole day, when each camera was recording and when it was not.",
        },
        {
          type: "image",
          src: media("stats/stats-5.webp"),
          alt: "Dashboard alarm charts",
          caption: "Alarm events per camera, as a donut for the total and as bars over time.",
        },
        {
          type: "image",
          src: media("stats/stats-heatmap-2.webp"),
          alt: "Motion and alarm heatmaps of a loading yard",
          caption: "Heatmaps of a loading yard: the busy lanes stand out.",
        },
        {
          type: "image",
          src: media("stats/stats-heatmap-3.webp"),
          alt: "Motion and alarm heatmaps of a parking area",
          caption: "Heatmaps of a parking area.",
        },
        {
          type: "image",
          src: media("stats/stats-7.webp"),
          alt: "Dashboard overview in Italian",
          caption: "The overview page in Italian, one of the two languages of ASC.",
        },
      ],
      chips: ["React", "TypeScript", "Material UI", "WebSockets", "Electron", "PyChart", "React Developer Tools"],
    },
    {
      id: "logistics",
      title: "Warehouse and logistics view",
      navLabel: "Warehouse",
      intro: "Follow a package from camera to camera, live or in recorded video.",
      body: "Operators search an order number or a barcode, and ASC opens the exact clips. Moving to the next camera keeps the same playback time, so the same moment is visible from every angle.",
      points: [
        "A warehouse map as a grid that grows in every direction",
        "Neighbouring cells shown around the picture, with a mini-map and arrow buttons",
        "Search linked to the client's logistics software",
      ],
      chips: ["React", "Material UI", "WebSockets", "Drag and drop", "Electron", "React Developer Tools"],
      sideMedia: [
        {
          type: "image",
          src: media("logistics/grid-5.webp"),
          alt: "Warehouse view with the camera of the current cell and the mini-map",
          caption:
            "The operator view: the camera of the current cell, with the search on the right and the mini-map of the grid under it.",
        },
      ],
      media: [
        {
          type: "video",
          src: media("video/grid-step-1.mp4"),
          poster: media("video/grid-step-1-poster.jpg"),
          alt: "Customizing the warehouse grid",
          caption: "1. Customize the grid: add or remove rows and columns in any direction.",
        },
        {
          type: "video",
          src: media("video/grid-step-2.mp4"),
          poster: media("video/grid-step-2-poster.jpg"),
          alt: "Adding cameras to the grid",
          caption: "2. Add cameras to the grid cells.",
        },
        {
          type: "video",
          src: media("video/grid-step-3.mp4"),
          poster: media("video/grid-step-3-poster.jpg"),
          alt: "Customizing the details of grid cells",
          caption: "3. Customize the details of the cells.",
        },
        {
          type: "video",
          src: media("video/grid-step-4.mp4"),
          poster: media("video/grid-step-4-poster.jpg"),
          alt: "Moving between cells in recorded video",
          caption: "4. Move between cells. The playback time stays the same.",
        },
      ],
    },
    {
      id: "other",
      title: "Other Aylook work",
      navLabel: "Other",
      intro: "Work for other Aylook projects and for the company itself, outside ASC.",
      rows: [
        {
          title: "AyCloud",
          text: "Next.js panel for managing Aylook machines, software versions and statistics.",
          details: [
            "AyCloud gives customers easy access to their machines: each customer gets a custom domain, and traffic goes through a VPN to the machine.",
          ],
          chips: ["Next.js", "React", "TypeScript", "Material UI", "Axios", "TanStack Query", "Zod"],

        },
        {
          title: "HWTester",
          text: "Frontend for the tool used to test Aylook hardware devices.",
          details: [
            "It runs checks such as network, stress and temperature, memory and disk tests, and shows the status of each one.",
          ],
          chips: ["React", "TypeScript", "Tailwind CSS", "Axios", "Redux", "Yup", "Formik"],
        },
        {
          title: "Ketna",
          text: "Refactoring of the internal app for time tracking, invoicing and business management.",
          chips: ["React", "TypeScript", "Bootstrap", "Axios", "TanStack Query", "React Hook Form", "Zod", "GitLab CI/CD"],
        },
        {
          title: "Coordination",
          text: "Client and helpdesk bug reports, troubleshooting with developers, tickets for frontend and backend, and reports for the owner.",
        },
      ],
      media: [
        {
          type: "image",
          src: media("tools/aycloud-1.webp"),
          alt: "AyCloud login page",
          caption: "AyCloud: the login page.",
        },
        {
          type: "image",
          src: media("tools/aycloud-2.webp"),
          alt: "AyCloud VPN client details",
          caption: "AyCloud: details of a VPN client. Sensitive values are blurred.",
        },
        {
          type: "image",
          src: media("tools/aycloud-3.webp"),
          alt: "AyCloud list of VPN clients",
          caption: "AyCloud: the list of VPN clients, with search and export.",
        },
        {
          type: "image",
          src: media("tools/hwtester-1.webp"),
          alt: "HWTester test status",
          caption: "HWTester: found machines on the network and the status of their tests.",
        },
        {
          type: "image",
          src: media("tools/ketna-1.webp"),
          alt: "Ketna start page",
          caption: "Ketna: the start page of the internal business app.",
        },
      ],
    },
  ],
};

const zerox: Job = {
  id: "zerox",
  company: "Zerox",
  shortName: "Zerox",
  logo: media("logos/zerox.png"),
  startLabel: "03/2022",
  endLabel: "04/2023",
  role: "Frontend / React Developer",
  kind: "Web agency",
  lead: "At Zerox I focused on turning Figma designs into responsive, pixel-perfect HTML, CSS and JavaScript pages, and into HubSpot pages, with maintainable styles written in BEM. In the later months I also worked on a TypeScript and React project, with forms validated with Formik and Yup. It was a local, very dynamic Agile/Scrum team, and code had to be shipped fast.",
  media: [
    {
      type: "image",
      src: media("zerox/zerox-1.webp"),
      alt: "Transcend Foods home page",
      caption: "Transcend Foods: the home page, built from the Figma design.",
    },
    {
      type: "image",
      src: media("zerox/zerox-2.webp"),
      alt: "Transcend Foods story and reviews",
      caption: "Transcend Foods: the story, reviews and questions.",
    },
    {
      type: "image",
      src: media("zerox/zerox-3.webp"),
      alt: "Transcend Foods products",
      caption: "Transcend Foods: the products.",
    },
    {
      type: "image",
      src: media("zerox/zerox-4.webp"),
      alt: "Archon landing page",
      caption: "Archon: the landing page.",
    },
  ],
  chips: [
    "HTML",
    "CSS",
    "JavaScript",
    "BEM",
    "HubSpot",
    "React",
    "TypeScript",
    "TanStack Query",
    "Axios",
    "Formik",
    "Yup",
    "Zod",
    "React Hook Form",
    "Tailwind CSS",
    "Figma",
    "Agile/Scrum",
  ],
  links: [
    { label: "zeroxdev.com", href: "https://www.zeroxdev.com/" },
    { label: "transcendfoods.com", href: "https://www.transcendfoods.com/" },
    { label: "Zerox website (my build)", href: "https://zeroxwebsitesb.netlify.app/" },
    { label: "Destiliraj (my build)", href: "https://zeroxdestiliraj.netlify.app/home.html" },
  ],
};

const fiverr: Job = {
  id: "fiverr",
  company: "Fiverr",
  shortName: "Fiverr",
  logo: media("logos/fiverr.svg"),
  startLabel: "10/2021",
  endLabel: "03/2022",
  role: "Frontend / React Developer",
  kind: "Freelance",
  mediaAspect: "banner",
  lead: "On Fiverr I worked on fixes and features for several customers, building and repairing pages with React, JavaScript, HTML, CSS/SASS and Bootstrap. Here are some of the clients who were most happy with my work.",

  media: [
    {
      type: "image",
      src: media("fiverr/review-1.webp"),
      alt: "Fiverr client review, five stars",
      caption: "Client review on Fiverr.",
    },
    {
      type: "image",
      src: media("fiverr/review-2.webp"),
      alt: "Fiverr client review from Serbia, five stars",
      caption: "Client review on Fiverr, from the client in Serbia.",
    },
  ],
  chips: ["React", "JavaScript", "HTML", "CSS/SASS", "Bootstrap"],
};

const laba: Job = {
  id: "laba",
  company: "Laba Innovations",
  shortName: "Laba",
  nameSuffix: " Innovations",
  initials: "LBI",
  startLabel: "06/2021",
  endLabel: "10/2021",
  role: "Frontend Intern",
  kind: "Internship",
  longName: true,
  lead: "My first job in a team. I worked on small fixes taken from tickets in a real project, and learned good practices: clean code and structure, first with vanilla JavaScript and later with React. This experience later helped me to work on my own on Fiverr.",
  chips: ["JavaScript", "React", "HTML", "CSS/SASS", "Git"],
};

const webfax: Job = {
  id: "webfax",
  company: "WebFax",
  shortName: "WebFax",
  logo: media("logos/webfax.png"),
  startLabel: "01/2021",
  endLabel: "06/2021",
  role: "Web Development Mentorship",
  kind: "Beginnings",
  lead: "Where it started. A mentor led me through design patterns, BEM, Sass, CSS frameworks, HTML, CSS and vanilla JavaScript. We built a few projects, and he introduced me to the basics of React.",
  cards: [
    {
      title: "Fitness club",
      text: "A practice project, a website for a fitness club.",
      tag: "Practice",
      image: {
        type: "image",
        src: media("webfax/fitness-club.webp"),
        alt: "Fitness club website",
        caption: "Fitness club: a practice project, a website for a fitness club.",
      },
      link: { label: "Take a look", href: "https://svetozarfitnessclub.netlify.app/" },
    },
    {
      title: "Agency",
      text: "A practice project, a landing page for an agency.",
      tag: "Practice",
      image: {
        type: "image",
        src: media("webfax/agency.webp"),
        alt: "Agency landing page",
        caption: "Agency: a practice project, a landing page for an agency.",
      },
      link: { label: "Take a look", href: "https://agency-flex.netlify.app/" },
    },
    {
      title: "Bootcamp",
      text: "A practice project, a landing page for a frontend bootcamp.",
      tag: "Practice",
      image: {
        type: "image",
        src: media("webfax/practice-site.webp"),
        alt: "Frontend bootcamp landing page",
        caption: "Bootcamp: a practice project, a landing page for a frontend bootcamp.",
      },
      link: { label: "Take a look", href: "https://svetozarsbs-5.netlify.app/" },
    },
  ],
  links: [{ label: "webfax.rs", href: "https://webfax.rs/index.html" }],
};

export const jobs: Job[] = [anteklab, zerox, fiverr, laba, webfax];
