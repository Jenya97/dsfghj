import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
export default function SinglePost() {
    const [singlePost,setSinglePost]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(singlePost=>setSinglePost(singlePost))
    })
  return (
    <div>
        {singlePost ? <div><h1>{singlePost.body}</h1></div> : <p>tvyal post@ arka chi</p>}
    </div>
  )
}
