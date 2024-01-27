import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    
    const Navigate = useNavigate();

  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/profile">Go to Profile page</Link><br/>
        <Link to="/about">Go to About page</Link><br/><br/>
        <Button variant="primary" onClick={()=> Navigate("/profile")}>
            Profile
        </Button>

    </div>
  )
}

export default Home