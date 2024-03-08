import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteStudent, getStudents} from "../../../service/studentsService";
import {Link} from "react-router-dom";

export default function ShowAll() {
    const dispatch = useDispatch();
    const students = useSelector(state => {
        console.log(state)
        return state.students.students
    })
    useEffect(() => {
        dispatch(getStudents())
    }, [])
    return(
        <>
           <div className="row">
               <div className="col-12">
                   <table className="table">
                       <thead className="thead-dark">
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Description</th>
                           <th scope="col">Action</th>
                           <th scope="col"></th>
                           <th scope="col"></th>
                       </tr>
                       </thead>
                       <tbody>
                       {students.map((item, index) =>(
                           <tr>
                           <th scope="row">{index + 1}</th>
                           <td>{item.name}</td>
                           <td>{item.description}</td>
                           <td>{item.action}</td>
                               <td>
                                   <Link className="btn btn-info" to={`edit/${item.id}`}>Edit</Link>
                               </td>
                               <td>
                                   <button type="button" className="btn btn-danger" onClick={()=> {
                                       dispatch(deleteStudent(item.id))
                                   }}>Delete</button>
                               </td>
                           </tr>
                       ))}
                       </tbody>
                   </table>
               </div>
           </div>
        </>
    )
}