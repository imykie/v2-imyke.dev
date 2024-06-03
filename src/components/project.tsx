import React from "react";

const Project: React.FC = () => {
    return (
        <section className="pt-24">
            <div className="sticky top-0 z-20 bg-slate-900/75 backdrop-blur">
                <h1 className="uppercase text-[#E2E8F0] font-bold py-5">
                    Projects
                </h1>
            </div>

            <div className="mb-12">
                <h3 className="text-[#E2E8F0]">
                    <a
                        href="https://github.com/imykie/cli-task-manager"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            A CLI Task Manager{" "}
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
                </h3>
                <p className="text-[#94A3B8] mt-2 text-sm">
                    Task CLI is a simple command line task manager that can be
                    used to manage your day to day tasks
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-[#E2E8F0]">
                    <a
                        href="https://github.com/imykie/tic-tac-toe-go"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            Tic Tac Toe{" "}
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
                </h3>
                <p className="text-[#94A3B8] mt-2 text-sm">
                    This is a tic-tac-toe game in Go programming language
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-[#E2E8F0]">
                    <a
                        href="https://v1.imyke.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            My V1 Portfolio Website{" "}
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
                </h3>
                <p className="text-[#94A3B8] mt-2 text-sm">
                    This is my version 1 portfolio website built with React,
                    Typescript and SASS
                </p>
            </div>
        </section>
    );
};

export default Project;
