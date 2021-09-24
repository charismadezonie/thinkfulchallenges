import React, { useState, useEffect } from "react";

function PostDetail({ posts }) {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
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
          <p id={id} onClick={handleClick}>
            {body}
          </p>
          {clicked ? <p>{comments[0].body}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
