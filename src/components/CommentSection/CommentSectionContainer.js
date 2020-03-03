// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "/Users/blakedavis/GitRepositories/React-Components-Insta-Clone/src/dummy-data.js";

const CommentSection = props => {
  // Add state for the comments
const [commentInfo, setCommentInfo]=useState([]);


  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
      {dummyData.map(x => 
        x.comments.map(y => {
          return (
          <Comment comment={y}/>
          )
        }))
      };

      {/* {console.log(dummyData)} */}
      
      {/* {dummyData.map(x =>{
        setCommentInfo(x);
        return(
          <Comment comment={commentInfo.comment} />
        )
      })} */}
     
      
      
    </div>
  );
};

export default CommentSection;
