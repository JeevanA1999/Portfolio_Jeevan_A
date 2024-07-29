import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/hotelBooking.png";
import Work2 from "./assets/jobline.jpeg";
import Work3 from "./assets/gfinder.png";
import Work4 from "./assets/cointrace.jpeg";


import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jeevan",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "A",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Bangalore",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8618415611",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jeevukulal96@mail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Jeevan A",
  },

  {
    id: 10,
    title: "Language : ",
    description: "English, Kannada, Hindi",
  },
];

export const stats = [
  {
    id: 1,
    no: "2",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  // {
  //   id: 3,
  //   no: "81+",
  //   title: "Happy <br /> Customers",
  // },

  // {
  //   id: 4,
  //   no: "53+",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - PRESENT",
    title: "Web Developer <span> Wipro Ltd </span>",
    desc: "Manage application development project from initial designs through completion. Communicating with clients or stakeholders to understand their needs and provide solutions. Collaborating with designers, back-end developers, and stakeholders to create seamless user experiences. Creating and implementing responsive design and optimization techniques to enhance user experience and performance. Troubleshooting and debugging code and resolving issues that may arise.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2020",
    title: " Software Developer Intern <span> SmartBridge Educational Service Private Limited </span>",
    desc: " Developed a mobile application using MIT App Inventor to monitor and control greenhouse conditions remotely. Implemented data archiving to IBM Cloud to ensure data availability for future analysis. Built an automated irrigation system using Arduino and Node-RED to optimize water usage in agriculture. Integrated sensors to monitor soil moisture levels and control water flow",
  },

  // {
  //   id: 3,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2005 - 2013",
  //   title: "Consultant <span> Videohive </span>",
  //   desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017-2021",
    title: "Engineering <span> Srinivas Institute of Technology Mangalore </span>",
    desc: "Bachelor of Engineering in Electronics and Communication",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015-2017",
    title: "Pre-University  <span> Carmel Composite PU College, Bantwal  </span>",
    desc: " Pre-University in PCMC",
  },

  // {
  //   id: 6,
  //   category: "education",
  //   icon: <FaGraduationCap />,
  //   year: "2009",
  //   title: "Bachelor Degree <span> Tunis High School </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  // },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "70",
  },

  {
    id: 5,
    title: "Tailwind Css",
    percentage: "60",
  },
  {
    id: 6,
    title: "Bootstrap",
    percentage: "45",
  },
  {
    id: 7,
    title: "Redux",
    percentage: "62",
  },
  {
    id: 8,
    title: "Git",
    percentage: "73",
  },


];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Hotel Room Booking",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Hotel Satkar",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML5,CSS3,ReactJs",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://hotel-booking-sooty.vercel.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: " Job Finder Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Job Line",
      },
      // {
      //   icon: <FiUser />,
      //   title: "Client : ",
      //   desc: "Dribble",
      // },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://job-finder-six.vercel.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Github Finder",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "G Finder",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Coin Trace",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Coin Trace",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://coin-trace-h6my.vercel.app/",
      },
    ],
  },

  // {
  //   id: 5,
  //   img: Work5,
  //   title:"Coin Trace",
  //   details: [
  //     {
  //       title: "Project : ",
  //       desc: "Website",
  //     },
  //     {
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       title: "Language : ",
  //       desc: "React JS, Node JS",
  //     },
  //     {
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dibble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
