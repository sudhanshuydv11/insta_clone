import React,{useState,useEffect} from "react";
import Post from './Post';
import "./App.css"
import {db} from "./firebase";
import Modal from "./BasicModal"





export default function App() {
  const [posts,setPosts]=useState([]);
useEffect(()=>{
  db.collection('posts').onSnapshot(ss=>{
    setPosts(ss.docs.map(doc=>({
      id:doc.id,
      post:doc.data()})))
  })
},[])


  return (
    
    <div >
      <Modal/>
     <div className="app__header">
       <img 
       className='app__headerImage'
       src='http://lofrev.net/wp-content/photos/2016/06/Instagram-logo-1.jpg'
       alt='something whong'
       />

     </div>
     {/**header */}
     {
       posts.map(({id,post}) =>(
       <Post key={id} username={post.username} caption={post.caption} imgurl={post.imgurl}/> )
       )
     }
     {/**posts */}
    </div>
  );
}
