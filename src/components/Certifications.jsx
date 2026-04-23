import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, issuer, date, link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00cea8] flex items-center justify-center flex-shrink-0">
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
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px] leading-tight">
                        {title}
                    </h3>
                    {issuer && (
                        <p className="text-secondary text-[13px]">{issuer}</p>
                    )}
                </div>
            </div>

            {date && (
                <p className="text-secondary text-[13px] mb-2">{date}</p>
            )}

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00cea8] text-[14px] font-medium hover:text-white transition-colors duration-300"
                >
                    View Certificate
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
            )}
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>
                    Professional Development
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Certifications.
                </h2>
            </motion.div>

            {certifications.length > 0 ? (
                <div className="mt-20 flex flex-wrap gap-7">
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={`certification-${index}`}
                            index={index}
                            {...cert}
                        />
                    ))}
                </div>
            ) : (
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Certifications coming soon. Stay tuned!
                </motion.p>
            )}
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");
