import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='job-details'>
        <h2>404 | Page not found</h2>
        <br/>
        <button onClick={()=>{
            navigate('/')
        }}>Go to homepage</button>
    </div>
  )
}

export default NotFound