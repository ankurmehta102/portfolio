import admin from "/images/admin.png";
import orderManagement from "/images/order-management.png";
import kioskSettings from "/images/kiosk_settings.png";
import picSafe from "/images/pic_safe.png";

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
    id: 1,
    projectTitle: "Admin Portal",
    description: "A web app to manage all critical e-commerce operations.",
    logo: admin,
    path: "projects/admin-portal",
  },
  {
    id: 2,
    projectTitle: "Order Management System",
    description:
      "A web application to oversee the complete order lifecycle, from initial placement to final fulfillment.",
    logo: orderManagement,
    path: "projects/order-management",
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
