import React, { Component } from "react";
import { graphql } from "gatsby";

export default function App({ data }) {
  return (
    <div>
      <h1>Trending</h1>
      {data.nodes.map((item) => (
        <React.Fragment key={JSON.stringify(item._id)}>
          <div>
            <div>{item.title}</div>
            <div>{item.body ? item.body[0]._rawChildren[0].text : "NULL"}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
