import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {editStudent} from "../../../service/studentsService";
export default function Edit() {
    let {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let students = useSelector(state => {
        return state.students.students.filter(student => student.id == id)
    })
    const handleEdit = async (id, values) => {
        console.log(id)
        dispatch(editStudent({id, values}))
        navigate(`/home`)
    }
    return(
        <>
            <div className="row">
                <div className="col-8">
                    <Formik initialValues={students[0]}
                            onSubmit={(values) =>{
                        handleEdit(students[0].id, values)
                    }} enableReinitialize={true}>
                        <Form>
                            <h1>Edit Student</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Student Name</label>
                                <Field type="text" className="form-control" name={'name'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Description</label>
                                <Field type="text" className="form-control" name={'description'}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Action</label>
                                <Field type="text" className="form-control" name={'action'}/>
                            </div>
                            <button type={`submit`} className="btn btn-primary">Edit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}