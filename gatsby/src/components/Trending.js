import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { device } from "../styles/Device";
const Grid_repeat_61fr = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
const Storygrid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column: 1/3;
  gap: 2rem;
  @media ${device.mobileM} {
    display: none;
  }
  p {
    font-size: 1rem;
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

function BigStory({ story, index }) {
  debugger;
  return (
    <React.Fragment>
      <BigStorystyles>
        <div>
          <div>{story.title}</div>
          <p>{story._rawBody[0].children[0].text.substring(0, 80) + "..."}</p>
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
      <Grid_repeat_61fr>
        <Storygrid>
          {data.nodes.map((item, index) => (
            <BigStory key={item._id} story={item} index={index} />
          ))}
        </Storygrid>
      </Grid_repeat_61fr>
    </>
  );
}
