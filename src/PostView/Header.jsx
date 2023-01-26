import React from 'react'
import {Link} from 'react-router-dom';
const Header = ({setForm}) => {
  return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src={require("../Images/instalogo.png")} alt="instalogo" />
            </div>
        </Link>
        <div className='insta-name'>
            <h2>InstaClone</h2>
        </div>
        <div className='camera' onClick={setForm(prev => !prev)}>
            <img src={require("../Images/camera.jpeg")} alt="cam" />
        </div>
    </header>
  )
}

export default Header