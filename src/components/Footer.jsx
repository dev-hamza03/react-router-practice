import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
   const naviGate =  useNavigate()
  return (
    <div className='footer' >
      <h2>Footer</h2>
      <button
      onClick={() => {
        naviGate('/Courses')
      }}
      >Explore courses</button>
    </div>
  )
}

export default Footer
