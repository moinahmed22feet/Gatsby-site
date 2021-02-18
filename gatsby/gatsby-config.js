// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from "dotenv";
console.log(process.env.SANITY_TOKEN);

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    //plugins go here
    "gatsby-plugin-styled-components",

    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "h27fvo6j",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
