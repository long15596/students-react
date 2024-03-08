import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function Add(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Create Student</h1>
            <Formik initialValues={{
                name: ``,
                description: ``,
                action: ``,
                score: ``
            }} onSubmit={(values) =>{
                axios.post(`http://localhost:3000/students`, values).then(()=>{
                    navigate(`/show`)
                })
            }}>
                <Form>
                    <Field name = {`name`}></Field>
                    <Field name = {`description`}></Field>
                    <Field name = {`action`}></Field>
                    <Field name = {`score`}></Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}