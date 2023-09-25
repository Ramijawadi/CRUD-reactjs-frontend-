import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            // alert("Data Posted Successfully!")
            navigate('/')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div  style={{backgroundColor:"#ac4eda"  , borderRadius:"20px"}} className='w-50 border text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div><br />
                <button  style={{Color:"#ac4eda" ,backgroundColor:"#a399af"}}className='btn'>Create</button>
            </form>
        </div>
    </div>
  );
}

export default Create;
