import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Storygrid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const Storystyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-gap: 0.5rem;
 

  
  }
  div:first-child {
    p {
      font-size: 3rem;
      margin-top: auto;
      color: var(--darkgrey);
    }
  }
  div:last-child {
    span {
      font-size: 1.5rem;
      color: var(--brown);
      font-family: Roboto;
      font-weight: bold;
    }
  }
`;
const H1 = styled.h1`{
text-shadow: 1px 1px 0px #ff0000;
width:min-content;
}`

function SingleStory({ story, index }) {
  return (
    <React.Fragment>
      <Storystyles>
        <div>
          <p>
            <span>0</span>
            {index + 1}
          </p>
        </div>
        <div>
          <Link to={`/story/${story._rawSlug.current}`}>
            <div>{story.title}</div>
          </Link>
          <p>{story.body ? story.body[0]._rawChildren[0].text : "NULL"}</p>
          <span>{story._createdAt.split("T")[0]}</span>
        </div>
      </Storystyles>
    </React.Fragment>
  );
}

export default function Trending({ data }) {
  return (
    <>
      <H1>Trending</H1>
      <Storygrid>
        {data.nodes.map((item, index) => (
          <SingleStory key={item._id} story={item} index={index} />
        ))}
      </Storygrid>
    </>
  );
}
