import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Experience: React.FC = () => {
    const data = useStaticQuery(graphql`
        query Experience {
            markdownRemark(fileAbsolutePath: { regex: "/experience/" }) {
                html
            }
        }
    `);
    return (
        <section className="pt-24">
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
                <h1 className="uppercase text-[#E2E8F0] font-bold py-5">
                    Experience
                </h1>
            </div>

            <div
                className="experience-style"
                dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html,
                }}
            />

            <div className="text-[#E2E8F0] font-semibold">
                <a
                    href="https://drive.google.com/file/d/1AaNUXytycyNR3fnZ2xgW30SmCh4RcYkn/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Full</span>{" "}
                    <span>
                        Résumé{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Experience;
