//API_URL comes from the .env.development file
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../constants'

function PostsList() {
  const [posts, setPosts] = useState([]) //posts is an array of objects
  const [loading, setLoading] = useState(true) //loading is a boolean
  const [error, setError] = useState(null) //error is an object

  //Fetch posts from Rails API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          console.log("Received posts:", json);
          setPosts(json);
        } else {
          throw response;
        }
      } catch (err) {
        setError("Error loading posts");
        console.error("No posts are showing up", err);
      } finally {
        setLoading(false);
      }
    }
    console.log("Fetching");
    loadPosts();
  },[]);
    console.log("Rendering", posts);


  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">
              {post.title}
            </Link>
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
       {error && <p>Error loading posts: {error}</p>}
    </div>
  );
}



export default PostsList;
