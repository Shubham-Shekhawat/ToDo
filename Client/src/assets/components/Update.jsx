import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const {id}=useParams()
  const [name,setName]=useState();
  const [age,setAge]=useState();
  const [email,setEmail]=useState();
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:4040/getuser/"+id)
    .then(result => {console.log(result)
        setName(result.data.name),
        setEmail(result.data.email),
        setAge(result.data.age)
    })
    .catch(err =>console.error(err))
},[])

const UpdateUser=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:4040/update/"+id,{name,email,age})
        .then((result) => {
            console.log(result)
            navigate("/");
        }).catch((err) => {
            console.error(err);
        });

}

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={UpdateUser}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update