import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Project: React.FC = () => {
    const data = useStaticQuery(graphql`
        query Projects {
            markdownRemark(fileAbsolutePath: { regex: "/projects/" }) {
                html
            }
        }
    `);
    return (
        <section className="pt-24">
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
                <h1 className="uppercase text-[#E2E8F0] font-bold py-5">
                    Projects
                </h1>
            </div>

            <div
                className="hard-styles"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
        </section>
    );
};

export default Project;
