import React, {useState, useEffect} from 'react'

function PostDetail({posts}) {
  const [comments, setComments] = useState([])

  console.log(posts)
  
  const handleClick = () => {
    set postId
    fetch
  }
  
  useEffect(() => (
    async function getComments() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      const data = await response.json();
      setComments(data)
      }
  ), [])
  
  return (
    <div>
      {posts.map(({title, body, id}) => (
        <div>
          <p>{title}</p>
          <p id={id} onClick={handleClick}>{body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostDetail