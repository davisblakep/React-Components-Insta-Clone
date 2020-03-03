// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "/Users/blakedavis/GitRepositories/React-Components-Insta-Clone/src/dummy-data.js";

const CommentSection = props => {
  // Add state for the comments

const userInfo = dummyData.map(x => {
  return x
})

const userCommentName = dummyData.map(x=>{
  x.comments.map(y=>{
    return y.username
  })
})

const userCommentText = dummyData.map(x=>{
  x.comments.map(y=>{
    return y.text
  })
})

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

      {console.log(dummyData)}
      
      {/* {dummyData.map(x=>{
        return(
          <Comment comment={x.comments.map(y=>{
            return(
              props.y
            )
          })} />
        )
      })} */}

      {/* {console.log(userInfo[0])}

      {userInfo.forEach(x =>{
        return(
          <Comment comment={x.comments.map(y=>{
            return props.y
          })} />
        )
      })} */}
     
      
      
    </div>
  );
};

export default CommentSection;
