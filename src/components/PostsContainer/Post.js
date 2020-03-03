// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import dummyData from "/Users/blakedavis/GitRepositories/React-Components-Insta-Clone/src/dummy-data.js";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
const [likeData, likeDataTotal] = useState(dummyData.likes)

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
      likeNumber = {props.post.likes} 
      onClick={() => likeDataTotal(likeData + 1)}
    
      />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;


