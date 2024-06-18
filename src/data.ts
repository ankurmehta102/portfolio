import admin from "/images/admin.png";
import orderManagement from "/images/order-management.png";
import kioskSettings from "/images/kiosk_settings.png";
import picSafe from "/images/pic_safe.png";
import { SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export const AdminPortalData = {
  id: 1,
  title: "Admin Portal",
  description:
    "At Mysense, I worked on a unified data platform for e-commerce (website,mobile app, kiosks) handling user/store creation, kiosk updates, andorder/transaction reporting.",
  techStack:
    "React.js, Redux.js, Nest.js(Node.js), MsSQL, Typescript, HTML, CSS",
  link: "",
  achievements: [
    {
      taskHeading: "1. Kiosk Maintenance System",
      taskDescription: [
        "Facilitates log collection.",
        "Enables one-click application updates.",
        "Utilized Firebase real-time database.",
      ],
      taskImage: kioskSettings,
    },
    {
      taskHeading: "2. Email Based Password Reset",
      taskDescription: [
        "Facilitates log collection.",
        "Enables one-click application updates.",
        "Utilized Firebase real-time database.",
      ],
    },
  ],
};
export const orderManagementData = {
  id: 2,
  title: "Order Management System",
  description:
    "At Mysense, I worked on a unified data platform for e-commerce (website,mobile app, kiosks) handling user/store creation, kiosk updates, andorder/transaction reporting.",
  techStack:
    "React.js, Redux.js, Nest.js(Node.js), MsSQL, Typescript, HTML, CSS",
  link: "",
  achievements: [
    {
      taskHeading: "1. Kiosk Maintenance System",
      taskDescription: [
        "Facilitates log collection.",
        "Enables one-click application updates.",
        "Utilized Firebase real-time database.",
      ],
      taskImage: kioskSettings,
    },
    {
      taskHeading: "2. Email Based Password Reset",
      taskDescription: [
        "Facilitates log collection.",
        "Enables one-click application updates.",
        "Utilized Firebase real-time database.",
      ],
    },
  ],
};
export const ImageGalleryData = {
  id: 3,
  title: "Image Gallery",
  description:
    "At Mysense, I worked on a unified data platform for e-commerce (website,mobile app, kiosks) handling user/store creation, kiosk updates, andorder/transaction reporting.",
  techStack:
    "React.js, Redux.js, Nest.js(Node.js), MsSQL, Typescript, HTML, CSS",
  link: "https://github.com/ankurmehta102/image-gallery-backend",
  features: [
    {
      taskDescription: [
        "Facilitates log collection.",
        "Enables one-click application updates.",
        "Utilized Firebase real-time database.",
      ],
    },
  ],
};

export const CardDetails = [
  {
    id: 2,
    projectTitle: "Order Management System",
    description:
      "A web application to oversee the complete order lifecycle, from initial placement to final fulfillment.",
    logo: orderManagement,
    path: "projects/order-management",
  },
  {
    id: 1,
    projectTitle: "Admin Portal",
    description: "A web app to manage all critical e-commerce operations.",
    logo: admin,
    path: "projects/admin-portal",
  },
  {
    id: 3,
    projectTitle: "PicSafe",
    description:
      "A desktop application for efficient image storage and management.",
    logo: picSafe,
    path: "projects/image-gallery",
  },
];

export const SkillsData = [
  {
    id: 1,
    name: "HTML",
    icon: SiHtml5,
    iconSize: 25,
    className: "hover:text-orange-500",
  },
  {
    id: 2,
    name: "CSS",
    icon: SiCss3,
    iconSize: 25,
    className: "hover:text-blue-400",
  },
  {
    id: 3,
    name: "React.js",
    icon: FaReact,
    iconSize: 25,
    className: "hover:text-[#61DBFB]",
  },
  {
    id: 4,
    name: "Redux.js",
    icon: SiRedux,
    iconSize: 25,
    className: "hover:text-violet-400",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: SiJavascript,
    iconSize: 22,
    className: "hover:text-yellow-500",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: SiTypescript,
    iconSize: 22,
    className: "hover:text-blue-400",
  },
  {
    id: 7,
    name: "Node.js",
    icon: SiNodedotjs,
    iconSize: 25,
    className: "hover:text-green-500",
  },
  {
    id: 8,
    name: "Nest.js",
    icon: SiNestjs,
    iconSize: 25,
    className: "hover:text-red-500",
  },
  {
    id: 9,
    name: "MsSql",
    icon: FaDatabase,
    iconSize: 25,
    className: "hover:text-[#61DBFB]",
  },
];
