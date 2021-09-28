import React, { useState, useEffect } from "react";

function PostDetail({ posts }) {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [postId, setPostId] = useState(1);

  const handleClick = ({ id }) => {
    setPostId(id);
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {posts.map(({ title, body, id }) => (
        <div>
          <p>{title}</p>
          <p id={id} onClick={() => handleClick({ id })}>
            {body}
          </p>
          {comments.map((comment) =>
            clicked && id === postId ? <p>{comment.body}</p> : null
          )}
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
