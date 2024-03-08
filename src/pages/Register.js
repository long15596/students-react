import {Link} from "react-router-dom";
import './css/Form.css'
export default function Register(){
    return(
        <>
            <div className="row">
                <div className="offset-4 col-4" id={`form`}>
                    <form>
                        <h1>Register</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text" className="form-control" id="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-secondary">
                            <Link to={`/`}>Login</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}