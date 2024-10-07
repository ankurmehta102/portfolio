import admin from "/images/admin.webp";
import orderManagement from "/images/order-management.webp";
import kioskSettings from "/images/kiosk_settings.webp";
import picSafe from "/images/pic_safe.webp";
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
        `Our team managed over 400 kiosks across different stores. When clients reported issues, we had to manually request critical information like the kiosk's printer configuration, kiosk ID, and app version, which slowed down the debugging process.`,
        `To address this, I developed an automated system that gathered the necessary kiosk details automatically. This streamlined the debugging process, reducing response time and increasing efficiency.`,
      ],
      taskImage: kioskSettings,
    },
    {
      taskHeading: "2. Email Based Password Reset",
      taskDescription: [
        `After the deployment of the production build, the client requested an additional feature: email-based password reset, without making any changes to the database.`,
        `I implemented this feature using password hashing and JWT tokens. A JWT token is sent via email to allow users to securely reset their passwords, without requiring changes to the existing database structure.`,
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
      taskHeading: "1. Notification system",
      taskDescription: [
        `Implemented a robust notification system using Firebase
Realtime Database, leading to a 30% reduction in order
fulfillment time.`,
      ],
      taskImage: kioskSettings,
    },
    {
      taskHeading: "2. Cookie based authentication",
      taskDescription: [
        `Enhanced site security by implementing HTTP-only
cookie-based authentication, reducing the risk of XSS
(cross-site scripting) attacks.`,
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
        "CDN support.",
        "User registration and bulk images upload support.",
        "Role based authentication and authorization.",
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
    id: "React.js",
    name: "React.js",
    icon: FaReact,
    iconSize: 30,
    className: "hover:text-[#61DBFB] col-span-2",
  },
  {
    id: "Redux.js",
    name: "Redux.js",
    icon: SiRedux,
    iconSize: 30,
    className: "hover:text-violet-400",
  },
  {
    id: "Node.js",
    name: "Node.js",
    icon: SiNodedotjs,
    iconSize: 30,
    className: "hover:text-green-500 row-span-2",
  },
  {
    id: "Nest.js",
    name: "Nest.js",
    icon: SiNestjs,
    iconSize: 30,
    className: "hover:text-red-500 col-span-2",
  },
  {
    id: "MsSql",
    name: "MsSql",
    icon: FaDatabase,
    iconSize: 30,
    className: "hover:text-[#61DBFB]",
  },
  {
    id: "JavaScript",
    name: "JavaScript",
    icon: SiJavascript,
    iconSize: 28,
    className: "hover:text-yellow-500",
  },
  {
    id: "TypeScript",
    name: "TypeScript",
    icon: SiTypescript,
    iconSize: 28,
    className: "hover:text-blue-400",
  },
  {
    id: "HTML",
    name: "HTML",
    icon: SiHtml5,
    iconSize: 30,
    className: "hover:text-orange-500",
  },
  {
    id: "CSS",
    name: "CSS",
    icon: SiCss3,
    iconSize: 30,
    className: "hover:text-blue-400",
  },
];
