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
            "Easy-to-manage web structures with CMS integration",
            "Modern UI design optimized for performance",
            "Responsive layout across all devices",
            "SEO-optimized static and dynamic content delivery",
        ],
        desc: "We design and develop modern websites that serve both marketing and functional purposes. Whether you're launching a simple landing page or a fully dynamic portal, our team ensures fast load times, robust security, and seamless performance across devices. Using cutting-edge technologies like Next.js and Tailwind CSS, we bring your ideas to life with a responsive and accessible design that drives conversions and user engagement.",
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
        desc: "We build scalable, cross-platform mobile apps that deliver native performance and user experiences. From MVPs to enterprise-grade solutions, our apps are powered by Firebase and Node.js for real-time data sync, robust backend support, and secure user authentication. With intuitive interfaces and blazing-fast performance, we help brands engage users on mobile like never before.",
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
        desc: "We design e-learning systems tailored for schools, coaching centers, and training platforms. Our solutions include course modules, video hosting, quizzes, and completion certificates. Teachers and learners benefit from real-time feedback and interactive sessions. Built on Laravel and React.js, these systems are secure, easy to scale, and flexible to evolving academic needs.",
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
        desc: "Our CRM solutions simplify sales workflows, automate outreach, and centralize client data. With real-time analytics and seamless integration into tools like email, SMS, and WhatsApp, teams can nurture leads more efficiently. We develop custom CRMs that adapt to your process — not the other way around. Perfect for B2B, retail, and service-driven businesses.",
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
        desc: "Our headless CMS platforms let you create, update, and publish content seamlessly. Designed for marketing and editorial teams, they include image management, version control, and real-time collaboration. Built with performance in mind, our CMS solutions support global scaling, multilingual content, and SEO enhancements out of the box.",
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
        desc: "We empower marketing teams to automate workflows and target the right audiences at the right time. Our tools manage drip campaigns, customer journeys, engagement scoring, and more. With seamless API integration and real-time performance dashboards, you'll gain deeper insights and higher ROI from every campaign you run.",
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
        desc: "Our event platforms support everything from workshops to large conferences. Built with React and PostgreSQL, they offer intuitive scheduling, ticket sales, automated emails, and badge generation. Admins can manage registrations, monitor attendance, and gather real-time feedback for future improvements — all from a centralized dashboard.",
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
        desc: "We integrate powerful chat modules into websites and apps, allowing businesses to communicate with customers in real time. Our system supports file sharing, chat transcripts, and agent performance analytics. Whether you're running a helpdesk or an eCommerce platform, our chat integration enhances support and drives customer satisfaction.",
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
        desc: "Our task management systems help teams stay aligned and productive. With drag-and-drop boards, reminders, and customizable flows, they support agile sprints, marketing campaigns, HR processes, and more. Built with NestJS and React, our platforms offer secure access, fast performance, and a collaborative user experience.",
        buttonstatus: "active",
        buttontxt: "Request A Demo"
    },
];

