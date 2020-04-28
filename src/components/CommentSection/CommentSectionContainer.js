// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import dummyData from "/Users/blakedavis/GitRepositories/WEBPT16/React-Components-Insta-Clone/src/dummy-data.js"

const CommentSection = props => {
  // Add state for the comments
  console.log("Comment props", props);
  const [commentData, setCommentData] = useState(dummyData)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      
     {props.comments.map(
         y => {
           return(
             <Comment {...y} />
           )
         }
       )
     } 
     <CommentInput />
    </div>
  );
};

export default CommentSection;
