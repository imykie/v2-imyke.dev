import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `v2`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-remark",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            width: 20,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "resume",
                path: "./src/contents/resume/",
            },
            __key: "resume",
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "./src/contents/projects/",
            },
            __key: "projects",
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "intro",
                path: "./src/contents/intro/",
            },
            __key: "intro",
        },

        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "about",
                path: "./src/contents/about/",
            },
            __key: "about",
        },

        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: ["G-ZKKM95X2PE"],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
};

export default config;
