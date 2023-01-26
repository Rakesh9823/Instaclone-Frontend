import React from 'react'
import {useEffect , useState} from 'react';

import axios from 'axios';
import Header from './Header';
import Form from './Form';
import Post from './Post';

const url = "ghasdhmqsg";
const PostView = () => {

  let [data , setData] = useState([]);
  let [postAdded , setPostAdded] = useState(0);
  let [form , setForm] = useState(false)

  useEffect(() =>{
    async function getData(){
      setData([])
     await axios.get(url).then((item) =>{
      setData(item.data.post)
     }).catch((err) =>{
      console.log(err);
     })

    }
    getData()
  } , [postAdded])
  return (
    <div className=''>
       <Header setForm={setForm} />
       {form ? <Form setForm= {setForm} postAdded= {setPostAdded} />: <Post data={data} />}
    </div>
  )
}

export default PostView