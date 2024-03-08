import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {addStudent} from "../../../service/studentsService";

export default function Add() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = (values) => {
        dispatch(addStudent(values))
        navigate(`/home`)
    }
    return(
        <>
            <div className="row">
                <div className="col-8">
                    <Formik initialValues={{
                        name: '',
                        description: '',
                        action: ''
                    }} onSubmit={(values) =>{
                        handleAdd(values)
                    }}>
                        <Form>
                            <h1>Add New Student</h1>
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
                            <button type="submit" className="btn btn-primary">Add</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}