//MAIN APP FILE
import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList';

function App() {

  return (
    <>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <p>This layout is in frontend/src/App.jsx</p>
        <PostsList/>
      </div>
    </>
  )
}

export default App;
