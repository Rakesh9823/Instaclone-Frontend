import React from 'react'
import {Link} from 'react-router-dom'
import '../LandingPage/LandingPage.css'
const LandingPage = () => {
  return (
    <div className='landingpage-container'>
        <section className='img-section'>
            <img src={require("../Images/lens-1418954.png")} alt="logo" />
        </section>
        <section className='app-name-enter'>
            <h1>10x Team 04</h1>
            <Link to='/PostView' className='link'>
                <button>Enter</button>
            </Link>
        </section>
    </div>
  )
}

export default LandingPage


