import React from "react";

const About: React.FC = () => {
    return (
        <section className="pt-24">
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
                <h1 className="uppercase text-[#E2E8F0] font-bold py-5">
                    About
                </h1>
            </div>
            <div className="text-[#94A3B8]">
                <p className="mb-4">
                    As a Computer Engineering student and Software Engineer, I
                    am passionate about using technology to solve real-world
                    problems. With a strong foundation in Computer Science and
                    Engineering principles and programming languages such as{" "}
                    <span className="text-[#fff]">
                        JavaScript, Python, C++ and Java.
                    </span>{" "}
                    I am constantly seeking opportunities to learn and apply my
                    skills in new and innovative ways.
                </p>
                <p className="mb-4">
                    In addition to my academic pursuits, I have completed
                    internships{" "}
                    <span className="text-[#fff]">
                        at leading technology companies
                    </span>
                    , where I have gained valuable experience working on complex
                    software projects. I am a team player who enjoys{" "}
                    <span className="text-[#fff]">
                        collaborating with others and sharing knowledge.
                    </span>
                </p>
                <p className="mb-4">
                    I am excited to continue learning and growing as a software
                    engineer, and I am eager to apply my skills and knowledge to
                    tackle challenging problems and make a positive impact on
                    the world.
                </p>
            </div>
        </section>
    );
};

export default About;
