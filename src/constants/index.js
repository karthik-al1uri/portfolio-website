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
    vedainfo,
    wipro,
    nativearakucoffee,
    enertech,
    aws,
    trailblaze,
    documind,
    coderefactor,
    hacktoberfest,
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
        id: "publications",
        title: "Publications",
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
        grade: "CGPA: 3.910/4.000",
        company_name: "University of Colorado, Boulder",
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
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "C",
        icon: C,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Databricks",
        icon: databricks,
    },
    {
        name: "PySpark",
        icon: pyspark,
    },
    {
        name: "Power BI",
        icon: powerbi,
    },
    {
        name: "git",
        icon: git,
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
        title: "Graduate Research Assistant",
        company_name: "University of Colorado Boulder",
        icon: UCB,
        iconBg: "#FFFFFF",
        date: "Jan 2026 – May 2026 · Boulder, CO",
        points: [
            "Architected a multi-agent RAG system using LangGraph and FAISS with self-correction loops for automated legacy code refactoring, achieving a 92% compilation success rate.",
            "Engineered FAISS-based dense retrievers reducing LLM hallucinations by 35% and cyclomatic complexity by 25% via Claude-powered refactoring pipelines.",
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Vedainfo",
        icon: vedainfo,
        iconBg: "#FFFFFF",
        date: "Mar 2023 – Jun 2023 · Hyderabad, India",
        points: [
            "Built a FAISS-powered semantic search assistant over legal document corpora, improving retrieval precision from 60% to 71%.",
            "Optimized the embedding pipeline and FAISS indexing to achieve sub-200ms query response times across thousands of documents.",
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
        name: "TrailBlaze AI",
        description:
            "AI-powered trail guidance for Colorado — combining real-time weather, live wildlife data, government trail geometry, and a conversational RAG pipeline to help hikers make smarter, safer decisions.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "RAG",
                color: "green-text-gradient",
            },
            {
                name: "LLM",
                color: "pink-text-gradient",
            },
        ],
        image: trailblaze,
        source_code_link: "https://github.com/karthik-al1uri/TrailBlaze-AI",
    },
    {
        name: "Documind AI",
        description:
            "Multimodal document intelligence platform that processes PDFs and scanned images with layout-aware parsing, semantic retrieval, and grounded question answering.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "multimodal",
                color: "green-text-gradient",
            },
            {
                name: "semantic-search",
                color: "pink-text-gradient",
            },
        ],
        image: documind,
        source_code_link: "https://github.com/karthik-al1uri/Documind-AI",
    },
    {
        name: "Automated Code Refactoring",
        description:
            "A multi-agent refactoring pipeline for Python codebases. It analyzes structure, detects code smells, generates a refactoring plan, applies changes via an LLM, and validates the result — all with a full audit trail.",
        tags: [
            {
                name: "multi-agent",
                color: "blue-text-gradient",
            },
            {
                name: "LLM",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: coderefactor,
        source_code_link: "https://github.com/karthik-al1uri/Automated-Code-Refactoring",
    },
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
        image: hacktoberfest,
        source_code_link: "https://github.com/cbitosc/cbit-hacktoberfest23",
    },
];

const publications = [
    {
        title: "Human-in-the-Loop Legacy Code Refactoring with RAG-Grounded Hallucination Analysis",
        description:
            "Under review, 2026. Published via University of Colorado, Boulder. Presents a multi-agent RAG pipeline with self-correction loops and hallucination analysis for automated legacy code refactoring.",
        link: "/publications/research-implementation-paper.pdf",
    },
    {
        title: "Aerodynamic Shape Optimization with GAN-Driven 3D Model Generation",
        description:
            "International Journal of Computing, 2024. Leverages Generative Adversarial Networks for aerodynamic shape optimization, demonstrating improved 3D design generation and performance prediction.",
        link: "/publications/research-implementation-paper.pdf",
    },
    {
        title: "Automated Aerodynamic Shape Optimization through GAN-Driven 3D Model Generation",
        description:
            "Presented at the 'Driving Innovation by Dynamic Optimization' conference, 2026. Explores GAN-driven shape generation for engineering design optimization.",
        link: "/publications/survey-paper.pdf",
    },
    {
        title: "Automated Aerodynamic Shape Optimization through GAN-Driven 3D Model Generation",
        description:
            "Accepted at University of Bahrain proceedings, 2026. Co-authored with GK Kumar, MSK Goud, TP Vital, and R Rakhee.",
        link: "/publications/lcr-paper.pdf",
    },
];

const certifications = [
    {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        link: "/certifications/aws-ai-practitioner.pdf",
    },
    {
        title: "CS50's Introduction to Artificial Intelligence with Python",
        issuer: "Harvard University",
        link: "/certifications/cs50ai.pdf",
    },
    {
        title: "Google Cybersecurity Certificate",
        issuer: "Google",
        link: "/certifications/infosys.pdf",
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
    publications,
    certifications,
};
