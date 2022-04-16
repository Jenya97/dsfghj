import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(posts=>setPosts(posts))
    },[])
  return (
    <div>
{posts.map(i=>(
    <p key={i.id}>{i.title}</p>
))}
    </div>
  )
}
