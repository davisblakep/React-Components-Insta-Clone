//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "/Users/blakedavis/GitRepositories/WEBPT16/React-Components-Insta-Clone/src/dummy-data.js"

const PostsPage = () => {
  // set up state for your data
  const [post, setPost] = useState(dummyData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {post.map(x => {
        return(
          <Post {...x} />
        )
      })}
    </div>
  );
};

export default PostsPage;
