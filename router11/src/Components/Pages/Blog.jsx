import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
const [blog,setBlog]=useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>setBlog(posts))
},[])
  return (
    <div>
        {blog.map(i=>(
            <Link  key={i.id} to={`/blog/${i.id}`}>{i.title}</Link>
        ))}
    </div>
  )
}
