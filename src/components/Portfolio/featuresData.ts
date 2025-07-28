import { FaGlobe, FaMobileAlt, FaGraduationCap, FaUserFriends, FaEdit, FaBullhorn, FaCalendarAlt, FaComments, FaTasks } from "react-icons/fa";
// data/techLogos.ts
import bootstrap from '../../../public/portfolio/toolsandtech/bootstrap.png';
import docker from '../../../public/portfolio/toolsandtech/docker.png';
import expressjs from '../../../public/portfolio/toolsandtech/expressjs.png';
import firebase from '../../../public/portfolio/toolsandtech/firebase.png';
import javascript from '../../../public/portfolio/toolsandtech/javascript.png';
import laravel from '../../../public/portfolio/toolsandtech/laravel.png';
import mongodb from '../../../public/portfolio/toolsandtech/mongodb.png';
import mysql from '../../../public/portfolio/toolsandtech/mysql.png';
import nestjs from '../../../public/portfolio/toolsandtech/nestjs.png';
import nextjs from '../../../public/portfolio/toolsandtech/nextjs.png';
import nodejs from '../../../public/portfolio/toolsandtech/nodejs.png';
import postgresql from '../../../public/portfolio/toolsandtech/postgresql.png';
import reactjs from '../../../public/portfolio/toolsandtech/reactjs.png';
import reactnative from '../../../public/portfolio/toolsandtech/reactnative.png';
import redux from '../../../public/portfolio/toolsandtech/redux.png';
import styledcomponents from '../../../public/portfolio/toolsandtech/styledcomponents.png';
import tailwindcss from '../../../public/portfolio/toolsandtech/tailwindcss.png';
import typescript from '../../../public/portfolio/toolsandtech/typescript.png';

export const techLogos = [
    { img: nextjs, name: 'Next.js' },
    { img: reactjs, name: 'React.js' },
    { img: typescript, name: 'TypeScript' },
    { img: javascript, name: 'JavaScript' },
    { img: nodejs, name: 'Node.js' },
    { img: expressjs, name: 'Express.js' },
    { img: mongodb, name: 'MongoDB' },
    { img: redux, name: 'Redux' },
    { img: tailwindcss, name: 'Tailwind CSS' },
    { img: bootstrap, name: 'Bootstrap' },
    { img: firebase, name: 'Firebase' },
    { img: mysql, name: 'MySQL' },
    { img: postgresql, name: 'PostgreSQL' },
    { img: nestjs, name: 'NestJS' },
    { img: docker, name: 'Docker' },
    { img: reactnative, name: 'React Native' },
    { img: styledcomponents, name: 'Styled Components' },
    { img: laravel, name: 'Laravel' },
];


export const featuresData = [
    {
        id: 1,
        title: "Static & Dynamic Websites",
        icon: FaGlobe,
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Bootstrap"],
        points: [
            "A fully automated events/training schedule management module",
            "Trainer Management application",
            "Advanced lead management module",
            "Insightful sales and revenue dashboards",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 2,
        title: "Mobile App Development",
        icon: FaMobileAlt,
        technologies: ["React Native", "Firebase", "Node.js"],
        points: [
            "Cross-platform app development (iOS/Android)",
            "Push notifications and real-time updates",
            "Optimized UI for mobile devices",
            "Secure authentication and user management",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 3,
        title: "E-Learning Systems",
        icon: FaGraduationCap,
        technologies: ["Laravel", "MySQL", "React.js"],
        points: [
            "Course management and certification",
            "Interactive content support",
            "Assessment and tracking",
            "Student-teacher communication tools",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 4,
        title: "CRM (Customer Relationship Management)",
        icon: FaUserFriends,
        technologies: ["Express.js", "MongoDB", "Redux"],
        points: [
            "Customer database management",
            "Sales tracking and automation",
            "Follow-up reminders and notes",
            "Integration with marketing platforms",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 5,
        title: "CMS (Content Management Systems)",
        icon: FaEdit,
        technologies: ["Next.js", "Node.js", "MongoDB"],
        points: [
            "Custom page creation and editing",
            "Media and asset management",
            "User role-based access controls",
            "SEO-friendly content delivery",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 6,
        title: "Marketing Automation",
        icon: FaBullhorn,
        technologies: ["Firebase", "Node.js", "Express.js"],
        points: [
            "Automated email and SMS campaigns",
            "Lead scoring and segmentation",
            "A/B testing of marketing assets",
            "Performance analytics dashboards",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 7,
        title: "Event Management Systems",
        icon: FaCalendarAlt,
        technologies: ["React.js", "PostgreSQL", "Tailwind CSS"],
        points: [
            "Event scheduling and calendar sync",
            "Online registration and ticketing",
            "Event reminders and check-in support",
            "Real-time attendance tracking",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
    {
        id: 8,
        title: "Live Web Chat Integration",
        icon: FaComments,
        technologies: ["React.js", "Firebase", "Redux"],
        points: [
            "Real-time 1:1 and group chats",
            "Agent dashboard with visitor details",
            "Offline messaging and email fallback",
            "Chatbot integration capability",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "inactive",
        buttontxt: "Development in process!"
    },
    {
        id: 9,
        title: "Task & Workflow Management Tools",
        icon: FaTasks,
        technologies: ["NestJS", "PostgreSQL", "React.js", "Styled Components"],
        points: [
            "Task assignment and progress tracking",
            "Kanban-style boards and calendar views",
            "Notification system for deadlines",
            "Workflow automation and approval flows",
        ],
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
];
