import React from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import Trending from "../components/Trending";
import { graphql } from "gatsby";

export default function Homepage({ data }) {
  return (
    <>
      <Trending data={data.allSanityPost} />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        _rawSlug
        title
        _createdAt
        _id
        _key
        _rawAuthor
        _rawBody
        _rawCategories
        _rawMainImage
        _rawSlug
        _rev
        _type
        _updatedAt
        mainImage {
          asset {
            fluid(
              maxHeight: 200
              maxWidth: 200
              sizes: "200*200"
              toFormat: PNG
            ) {
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
