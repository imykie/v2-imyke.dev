import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles} className="p-8 md:p-12 lg:p-16 xl:p-20">
      <h1 className="text-2xl font-bold">Hello! I'm Michael Olatunji.</h1>
      <p className="mt-4">
        <span>
          I'm a <span>Software Engineer</span> and{" "}
          <span>a Computer Engineering major</span> with passion for
          problem-solving, strong foundation in computer science principles and
          proven track record of delivering high-quality and scalable code.
        </span>
      </p>

      <div className="my-4">
        <h1 className="">
          A new version of this website is currently in development
        </h1>
        <p className="">
          visit the old version{" "}
          <a
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="https://v1.imyke.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>

      <h3 className="text-lg font-bold">Socials</h3>
      <div className="w-[140px] flex justify-between">
        <a
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href="https://github.com/imykie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href="https://linkedin.com/in/imykel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
