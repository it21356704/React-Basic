import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {

    const Navigate = useNavigate();

  return (
    <div>
        <h1>Profile Page</h1>
        <Button onClick={()=> Navigate(-1)}>
            Back
        </Button>
    </div>
  )
}

export default Profile