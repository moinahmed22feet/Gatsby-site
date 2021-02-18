import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

function SingleStory({ story }) {
  return (
    <React.Fragment>
      <div>
        <Link to={`/story/${story._rawSlug.current}`}>
          <div>{story.title}</div>
        </Link>
        <Img fluid={story.mainImage.asset.fluid} alt={story.title} />
        <div>{story.body ? story.body[0]._rawChildren[0].text : "NULL"}</div>
      </div>
    </React.Fragment>
  );
}

export default function Trending({ data }) {
  return (
    <div>
      <h1>Trending</h1>
      {data.nodes.map((item) => (
        <SingleStory key={item._id} story={item} />
      ))}
    </div>
  );
}
