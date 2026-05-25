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
    pytorch,
    tensorflow,
    docker,
    fastapi,
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
    { name: "Python", icon: python },
    { name: "JavaScript", icon: javascript },
    { name: "C", icon: C },
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "PyTorch", icon: pytorch },
    { name: "TensorFlow", icon: tensorflow },
    { name: "React JS", icon: reactjs },
    { name: "Next.js", icon: nextjs },
    { name: "FastAPI", icon: fastapi },
    { name: "Docker", icon: docker },
    { name: "AWS", icon: aws },
    { name: "Power BI", icon: powerbi },
    { name: "git", icon: git },
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
            "Achieved 92% code compilation success rate by architecting a multi-agent RAG system using LangGraph and FAISS with self-correction loops for automated legacy code refactoring.",
            "Engineered FAISS-based dense retrievers reducing LLM hallucinations by 35% and cyclomatic complexity by 25% via Claude-powered refactoring pipelines; authored Human-in-the-Loop Legacy Code Refactoring with RAG-Grounded Hallucination Analysis (under review, 2026).",
        ],
    },
    {
        title: "Generative AI Developer",
        company_name: "Wipro",
        icon: wipro,
        iconBg: "#FFFFFF",
        date: "Aug 2024 – May 2025 · Hyderabad, India",
        points: [
            "Reduced physician documentation time by 90% by architecting an AI-powered diagnostic platform, cutting daily workload from several hours to under 15 minutes per physician.",
            "Built FastAPI and TensorFlow real-time inference workflows improving diagnostic throughput for 10+ clinicians across 3 hospital departments.",
        ],
    },
    {
        title: "Software Development Intern",
        company_name: "Enertech Comnet Pvt Ltd",
        icon: enertech,
        iconBg: "#FFFFFF",
        date: "Aug 2023 – Nov 2023 · Hyderabad, India",
        points: [
            "Improved UI responsiveness by 25% by leading front-end development of Version 2.0 and integrating new components with backend REST APIs.",
            "Built reusable component architecture that improved codebase maintainability and reduced onboarding time for new feature development.",
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Vedainfo",
        icon: vedainfo,
        iconBg: "#FFFFFF",
        date: "Mar 2023 – Jun 2023 · Hyderabad, India",
        points: [
            "Improved retrieval precision from 60% to 71% by building a FAISS-powered semantic search assistant over large legal document corpora, enabling analysts to surface relevant clauses via natural language queries.",
            "Achieved consistent sub-200ms query response times through optimized FAISS indexing, making the system viable for real-time analyst workflows at scale.",
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
            "Production RAG platform deployed to 10+ real users — integrating 5,600+ Colorado trails into a 4-agent LangGraph pipeline with real-time weather, wildlife data, interactive Leaflet maps, and GPX export. Deployed on AWS ECS Fargate via GitHub Actions CI/CD.",
        tags: [
            { name: "LangGraph", color: "blue-text-gradient" },
            { name: "FastAPI", color: "green-text-gradient" },
            { name: "AWS-ECS", color: "pink-text-gradient" },
        ],
        image: trailblaze,
        source_code_link: "https://github.com/karthik-al1uri/TrailBlaze-AI",
        live_link: "https://trail-blaze-ai.vercel.app",
    },
    {
        name: "Aerodynamic Shape Optimization",
        description:
            "GAN-based 3D generation pipeline that reduced design iteration time by 40% and improved aerodynamic accuracy by 15% with 12% drag reduction via real-time CFD simulations. Published in 3 venues: IJC 2024, DI-DO conference 2026, and University of Bahrain 2026.",
        tags: [
            { name: "PyTorch", color: "blue-text-gradient" },
            { name: "GANs", color: "green-text-gradient" },
            { name: "CFD", color: "pink-text-gradient" },
        ],
        image: coderefactor,
        source_code_link: "https://github.com/karthik-al1uri",
    },
    {
        name: "Documind AI",
        description:
            "Multimodal document intelligence platform that processes PDFs and scanned images with layout-aware parsing, semantic retrieval via FAISS, and grounded question answering using RAG pipelines.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "FAISS", color: "green-text-gradient" },
            { name: "multimodal", color: "pink-text-gradient" },
        ],
        image: documind,
        source_code_link: "https://github.com/karthik-al1uri/Documind-AI",
    },
    {
        name: "Automated Code Refactoring",
        description:
            "Multi-agent LLM pipeline that analyzes Python codebases, detects code smells, generates refactoring plans, applies changes via Claude, and validates results — achieving 92% compilation success with a full audit trail.",
        tags: [
            { name: "LangGraph", color: "blue-text-gradient" },
            { name: "RAG", color: "green-text-gradient" },
            { name: "Claude", color: "pink-text-gradient" },
        ],
        image: hacktoberfest,
        source_code_link: "https://github.com/karthik-al1uri/Automated-Code-Refactoring",
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
