import React from 'react'
import Time from './Time';

const Card = (props) => {
    let { likes, description, name, date, img, location } = props;
    return (
        <div className='card'>
            <div className='head-section'>
                <div className='name-city'>
                    <div className='name'>
                        {name}
                    </div>
                    <div className='city'>
                        {location}
                    </div>
                    <div className='option'>
                        ...
                    </div>
                </div>
            </div>
            <div className='image-section'>
                <img src={img} alt={name} />
            </div>
            <div className='l-s-icons'>
                <div className='likes'>
                    <img src={require("../Images/heart.png")} alt="likes" />
                </div>
                <div className='share'>
                    <img src={require("../Images/share.png")} alt="share" />
                </div>
                <div className="date">
                    { <Time  date={date}/> }
                </div>
            </div>
            <div className='likes-in-words'>
                {likes} likes
            </div>
            <div className='description'>
                {description}
            </div>

        </div>
    )
}

export default Card