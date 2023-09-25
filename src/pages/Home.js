import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";

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
                <h1>Crud App with json Server</h1>
                <Link to="/create" className="btn btn-success my-3">Create +</Link>
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

                                    <Link className="text-decoration-none btn btn-sm btn-success" to={`/update/${data.id}`}>Update</Link>
                                    <button className="btn btn-sm btn-danger" onClick={e => handleDelete(data.id)}>Delete</button>
                                    <Link className="btn btn-sm btn-primary" to={`/read/${data.id}`}>Read</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        );
    };

    export default Home;
