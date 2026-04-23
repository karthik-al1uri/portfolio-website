import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ index, title, description, link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>
                <h3 className="text-white font-bold text-[20px] leading-tight">
                    {title}
                </h3>
            </div>

            <p className="text-secondary text-[14px] leading-[22px]">
                {description}
            </p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#915EFF] text-[14px] font-medium hover:text-white transition-colors duration-300"
            >
                View Paper
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </a>
        </motion.div>
    );
};

const Publications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Research</p>
                <h2 className={`${styles.sectionHeadText}`}>Publications.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    My published research work exploring the intersection of deep
                    learning, generative models, and engineering design optimization.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {publications.map((pub, index) => (
                    <PublicationCard
                        key={`publication-${index}`}
                        index={index}
                        {...pub}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Publications, "publications");
