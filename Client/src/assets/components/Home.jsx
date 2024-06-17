import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(result => setUsers(result.data))
        .catch(err =>console.error(err))
    },[])

    const Delete=(id)=>{
        axios.delete("http://localhost:3000/delete/"+id)
            .then((result) => {
                console.log(result)
                window.location.reload() // to reload the page
            }).catch((err) => {
                console.error(err);
            });
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'> Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.name} </td>
                                <td>{user.email} </td>
                                <td>{user.age} </td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'> Edit</Link> 
                                    <button className='btn btn-danger' onClick={(e)=> Delete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home