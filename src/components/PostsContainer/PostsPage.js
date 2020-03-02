//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "/Users/blakedavis/GitRepositories/React-Components-Insta-Clone/src/dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map(x => {
        return <Post post={x}/>
      })}
  
    </div>
  );
};

export default PostsPage;

