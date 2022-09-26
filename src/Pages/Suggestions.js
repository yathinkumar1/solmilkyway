import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import {Form} from 'react-bootstrap';
import './Suggestions.css';
import Post from '../Components/Post';


const Suggestions = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
} =useForm();
let [allPost,setAllPost]=useState([]);
useEffect(()=>{
},[allPost]);
const FormHandle=(postObj)=>{
  setAllPost([...allPost,postObj])
}
  return (
    <div className="initial">
            <br></br>
            <br></br>
            <h2 className="tittle">Post Your Question Here</h2>
            <br></br>
           
            <Form className="w-50" style={{display:"flex",marginInlineStart:"40%",height:"4rem"}} onSubmit={handleSubmit(FormHandle)}>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Type Here" {...register("message",{required:true})} />
                </Form.Group>
                <button className="btn btn-success" style={{marginInlineStart:"1rem",borderRadius:"2rem",width:"3rem",height:"3rem"}} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>
                </button>
            </Form>
            <br></br>
            <br></br>
            <h2 className="tittle">Recent Posts</h2>
            <div className="d-flex flex-column" id='allpost'>
                {
                    allPost.map((post,index)=><Post key={index} post={post} className='tittle'></Post>)   
                }
            </div>
        </div>
  )
}

export default Suggestions