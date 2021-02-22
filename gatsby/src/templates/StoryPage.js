import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"
export default function SingleStoryPage({data}){
const {fluid}=(data.allSanityPost.nodes)[0].mainImage.asset

    return <div>
      <p>{data.allSanityPost.nodes[0].title}</p>
      <Img fluid={(data.allSanityPost.nodes)[0].mainImage.asset.fluid}></Img>
      </div>
    
}


export const query = graphql `
query ($slug:String!) {
  allSanityPost(filter: {slug: {current: {eq: $slug}}}) {
    nodes {
      mainImage {
        asset {
          fluid {
            base64
            sizes
            src
            srcSet
            srcWebp
            aspectRatio
          }
          _createdAt
        }
      }
      author {
        name
      }
      title
      subtitle
      storytype
      body {
        children {
          text
        }
      }
    }
  }
}
`