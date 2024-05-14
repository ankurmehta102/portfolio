import admin from "/images/admin.png";
import orderManagement from "/images/order-management.png";
import kioskSettings from "/images/kiosk_settings.png";

export const AdminPortalData = {
  title: "Admin Portal",
  description:
    "At Mysense, I worked on a unified data platform for e-commerce (website,mobile app, kiosks) handling user/store creation, kiosk updates, andorder/transaction reporting.",
  techStack:
    "React.js, Redux.js, Nest.js(Node.js), MsSQL, Typescript, HTML, CSS",
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

// export const TaskData = [
//   {
//     heading: "1. Kiosk Maintenance System",
//     description: [
//       "Facilitates log collection.",
//       "Enables one-click application updates.",
//       "Utilized Firebase real-time database.",
//     ],
//     image: kioskSettings,
//   },
//   {
//     heading: "2. Email Based Password Reset",
//     description: [
//       "Facilitates log collection.",
//       "Enables one-click application updates.",
//       "Utilized Firebase real-time database.",
//     ],
//   },
// ];

export const CardDetails = [
  {
    projectTitle: "Admin Portal",
    description:
      "A tool to manage all the important operations of an e-commerce.",
    logo: admin,
  },
  {
    projectTitle: "Order Management System",
    description:
      "A tool to manage all the important operations of an e-commerce.",
    logo: orderManagement,
  },
  {
    projectTitle: "Admin Portal",
    description:
      "A tool to manage all the important operations of an e-commerce.",
    logo: admin,
  },
];
