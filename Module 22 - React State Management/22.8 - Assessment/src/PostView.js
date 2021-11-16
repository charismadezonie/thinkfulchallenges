import React from "react";

function PostView({ deletePost, post }) {
  if (post.type === "Text") {
    return (
      <div className="post">
        <p>{post.content}</p>
        <button name="delete" onClick={deletePost}>
          Delete
        </button>
      </div>
    );
  } else {
    return (
      <div className="post">
        <img src={post.content} alt="added post" />
        <button name="delete" onClick={deletePost}>
          Delete
        </button>
      </div>
    );
  }
}

export default PostView;
