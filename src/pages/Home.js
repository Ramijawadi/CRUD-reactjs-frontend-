import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";

import * as Icon from "react-bootstrap-icons"

const Home = () => {
    const [data, setData] = useState([]);

const navigate = useNavigate()
    const handleDelete = (id) =>  {

        const confirm = window.confirm("would you delete");
        if (confirm) {

            axios.delete('http://localhost:3030/users/'+id)
                .then(res => { alert("deleted successfully !");
            navigate('/') })


        }
    }
        useEffect(() => {
            axios
                .get("http://localhost:3030/users")
                .then((res) => setData(res.data))
                .catch((err) => console.log(err));
        }, []);
        return (
            <div class="container mt-5">
                <h1 style={{color:"gray" ,fontFamily:"sans-serif" , display:"flex" , justifyContent:"center"}}>Crud App with json Server</h1>
                <Link to="/create">
               
                <Icon.PersonAdd  size={50} color="#ac4eda" />

                </Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>

                                    <Link to={`/update/${data.id}`}>

                                    <Icon.PencilSquare  size={25} color="green" />
                                    </Link>

                          <Icon.Trash3  size={25} color="red" onClick={e => handleDelete(data.id)} /> 


                                    {/* <button className="btn btn-sm btn-danger" onClick={e => handleDelete(data.id)}>Delete</button> */}
                                    <Link  to={`/read/${data.id}`}>

                                    <Icon.Eye  size={25} color="gray" />

                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        );
    };

    export default Home;
