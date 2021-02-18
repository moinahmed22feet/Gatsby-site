import React from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import App from "../pages/App";
import { graphql } from "gatsby";

export default function Homepage({ data }) {
  return (
    <>
      <App data={data.allSanityPost} />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        title
        body {
          _key
          _type
          style
          list
          _rawChildren
        }
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
      }
    }
    allSanityImageAsset {
      nodes {
        fluid(maxWidth: 400) {
          base64
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;
