import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    C,
    django,
    threejs,
    CBIT,
    Bhashyam,
    Chaitanya,
    prahethi,
    cosc,
    hfest23,
    leaderboard,
    lms,
    powerbi,
    databricks,
    pyspark,
    UCB,
    cyient,
    wipro,
    nativearakucoffee,
    enertech,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "ML Engineer",
        icon: web,
    },
    {
        title: "Data Engineer Enthusiast",
        icon: mobile,
    },
    {
        title: "LLM Engineer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const education = [

    {
        title: "Masters in Computer Science",
        subject: "Major: CSE",
        //grade: "CGPA: 3.5/4",
        company_name: "Unversity of Colorado, Boulder",
        icon: UCB,
        date: "2025 - present",
    },


    {
        title: "Bachelor of Engineering",
        subject: "Major: CSE",
        grade: "CGPA: 9.00/10",
        company_name: "Chaitanya Bharathi Institute of Technology",
        icon: CBIT,
        date: "2021 - 2025",
    },
    {
        title: "Intermediate",
        subject: "Major: MPC",
        grade: "Percent: 93.4%",
        company_name: "Fiitjee Junior College",
        icon: Chaitanya,
        date: "2019 - 2021",
    },

    {
        title: "High School",
        subject: "Board: CBSE",
        grade: "CGPA: 9.8/10",
        company_name: "Delhi Public School ",
        icon: Bhashyam,
        date: "2013 - 2019",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Databricks",
        icon: databricks,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "Pyspark",
        icon: pyspark,
    },
    {
        name: "powerbi",
        icon: powerbi,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "C",
        icon: C,
    },



];

const experiences = [
    {
        title: "Member of Car Design Team",
        company_name: "Prahethi Racing",
        icon: prahethi,
        iconBg: "#000000",
        date: "November 2022 - November 2023",
        points: [
            "Contributed to the design team, refining technical aspects of the racing car.",
            "Engaged in hands-on fabrication and assembly of the racing vehicle.",
            "Collaborated with team members to optimize car performance and efficiency.",
            "Gained practical insights into automotive engineering and design principles.",
        ],
    },
    {
        title: "Vice President",
        company_name: "COSC",
        icon: cosc,
        iconBg: "#E6DEDD",
        date: "January 2024 - March 2025",
        points: [
            "Organized hackathons and bootcamps, fostering innovation.",
            "Advocated open-source technology adoption.",
            "Built diverse web applications, enhancing coding proficiency.",
            "Collaborated on various open-source projects, promoting knowledge sharing.",
        ],
    },
];

const workExperiences = [
    {
        title: "Machine Learning Intern",
        company_name: "Cyient",
        icon: cyient,
        iconBg: "#FFFFFF",
        date: "Jan 2025 – Apr 2025 · Hyderabad",
        points: [
            "Built an intelligent document search assistant using Gemini API and FAISS to enable semantic discovery across thousands of documents.",
            "Engineered a custom embedding pipeline and optimized FAISS indexing, reducing median query latency to <200 ms and improving top-3 precision.",
        ],
    },
    {
        title: "Technical Intern",
        company_name: "Wipro",
        icon: wipro,
        iconBg: "#FFFFFF",
        date: "Jun 2024 – Aug 2024 · Hyderabad",
        points: [
            "Built an AI-powered diagnostic platform to manage patient records and generate recommendations with auditable summaries.",
            "Automated clinical note-taking, reducing documentation time per physician from ~2 hours to ~20 minutes.",
            "Applied real-time data pipelines and ML models to improve recommendation accuracy and user trust.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Enertech",
        icon: enertech,
        iconBg: "#FFFFFF",
        date: "Feb 2024 – Apr 2024",
        points: [
            "Built a real-time telemetry dashboard for energy devices using React and WebSockets, reducing incident triage time by ~40%.",
            "Implemented a data ingestion pipeline (Python + SQL) with batching and indexing that cut query times by ~60% and lowered storage costs.",
            "Set up CI/CD with automated tests and previews, shrinking release cycles from ~30 minutes to ~5 minutes per deploy.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Native Araku Coffee Pvt. Ltd.",
        icon: nativearakucoffee,
        iconBg: "#FFFFFF",
        date: "Jun 2023 – Sep 2023 · Hyderabad",
        points: [
            "Developed a responsive React web platform backed by Python APIs and SQL to modernize the company’s digital presence.",
            "Implemented UX improvements that increased product page engagement and reduced bounce on mobile.",
            "Optimized queries and asset delivery, improving key page load time and Lighthouse performance scores.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Karthik proved me wrong.",
        name: "Navya Matta",
        designation: "CEO",
        company: "NAYA",
        image: "",
    },
];

const projects = [
    {
        name: "COSC Hacktoberfest 2023",
        description:
            "The central hub for CBIT Hacktoberfest Hackathon 2023, offering dynamic responsiveness, captivating animations, and seamless event registration.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "gsap",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hfest23,
        source_code_link: "https://github.com/cbitosc/cbit-hacktoberfest23",
    },
    {
        name: "CP Leaderboard",
        description:
            "Website for tracking coding progress and rankings across platforms like LeetCode. Join the community, compete, and climb the ranks in competitive coding.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: leaderboard,
        source_code_link: "https://github.com/cbitosc/LeaderBoard",
    },
    {
        name: "Library Management",
        description:
            "A comprehensive, user-friendly library system for students, efficiently managed by librarians. This responsive website features smooth parallax scroll animations.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "sqlite",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: lms,
        source_code_link:
            "https://github.com/karthik-al1uri/Library-Management-System",
    },
];

export {
    services,
    technologies,
    experiences,
    workExperiences,
    education,
    testimonials,
    projects,
};
