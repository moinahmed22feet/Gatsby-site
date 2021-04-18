import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { device } from "../styles/Device";

const Storygrid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  @media ${device.mobileM} {
    display: none;
  }
  p {
    font-size: 3rem;
    margin-top: auto;
    color: var(--darkgrey);
  }

  span {
    font-size: 1.5rem;
    color: var(--brown);
    font-family: Roboto;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
`;

const H1 = styled.h1`
   {
    text-shadow: 1px 1px 0px #ff0000;
    width: min-content;
  }
`;

const BigStorystyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-gap: 0.5rem;
`;

function BigStory({ story, index }) {
  return (
    <React.Fragment>
      <BigStorystyles>
        <div>
          <div>{story.title}</div>
          <p>{story._rawBody ? story._rawBody[0].children[0].text : "Null"}</p>
        </div>
        <div>
          <Link to={`/story/${story._rawSlug.current}`}>
            <Img fluid={story.mainImage.asset.fluid} />
            <span>{story._createdAt.split("T")[0]}</span>
          </Link>
        </div>
      </BigStorystyles>
    </React.Fragment>
  );
}

export default function Trending({ data }) {
  return (
    <>
      <H1>Trending</H1>
      <Storygrid>
        {data.nodes.map((item, index) => (
          <BigStory key={item._id} story={item} index={index} />
        ))}
      </Storygrid>
    </>
  );
}
