import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const About: React.FC = () => {
    const data = useStaticQuery(graphql`
        query About {
            markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
                html
            }
        }
    `);
    return (
        <section className="pt-24">
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
                <h1 className="uppercase text-[#E2E8F0] font-bold py-5">
                    About
                </h1>
            </div>
            <div
                className="about-style"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
        </section>
    );
};

export default About;
