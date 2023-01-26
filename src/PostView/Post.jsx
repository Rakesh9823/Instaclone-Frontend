import React from 'react'
import Card from '../PostView/Card.jsx'
const Post = ({data}) => {
  return (
    <div>
        {data.map((item , index) =>{
            return <Card 
                   key={index}
                   name={item.name}
                   location={ item.location }
                  description={ item.description }
                  img={ item.PostImage }
                  likes={ 20 }
                 date={new Date(item.createdAt)}
                     />
        })}
    </div>
  )
}

export default Post