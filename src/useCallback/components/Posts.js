import React from "react";
import { Card, Button } from "../../components";

const Posts = ({ data, term }) => {

  return (
    <div>
      {data.map((post) => {
        return (
          <Card width={700} key={post.id}>
            <h4>
              {post.title.toUpperCase()}
            </h4>
            <p>{post.body}</p>
          </Card>
        );
      })}
    </div>
  );
};

// export default React.memo(Posts);
export default Posts;
