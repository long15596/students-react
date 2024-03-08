import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Show(){
    let [list, setList] = useState([])
    useEffect(() => {
       showList()
    }, []);
    function showList(){
        axios.get(`http://localhost:3000/students`).then(resp =>{
            setList(resp.data)
        })
    }
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Score</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                {list.map(item => (
                    <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.action}</td>
                        <td>{item.score}</td>
                        <td>
                            <button><Link to={`edit/${item.id}`}>Edit</Link></button>
                        </td>
                        <td>
                            <button onClick={() => {
                                axios.delete(`http://localhost:3000/students/${item.id}`).then(() => {
                                    showList()
                                })
                            }}>Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}