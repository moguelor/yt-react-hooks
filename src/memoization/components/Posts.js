import React from "react";
import { Card } from "../../components";

const Posts = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <Card width={700} key={post.id}>
          <h4>{post.title.toUpperCase()}</h4>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
