import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <p>
        <span>
          I'm a <span>Software Engineer</span> and{" "}
          <span>a junior Computer Engineering major</span>{" "}
          with passion for problem-solving, strong foundation in computer
          science principles and proven track record of delivering high-quality
          and scalable code.
        </span>
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
