import {Link} from "react-router-dom";

export default function Logo(){
    return(
        <>
            <Link className="navbar-brand" to={`/home`}>Lô Văn Gô</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    )
}