import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";
import Project from "../components/project";

const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#0F172A",
};

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main
            style={pageStyles}
            className="min-h-screen p-8 md:p-12 lg:p-16 xl:p-20"
        >
            <Intro />
            <About />
            <Experience />
            <Project />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
