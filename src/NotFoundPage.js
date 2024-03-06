import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div>
            <h1>Page not found . Error - 404</h1>
            <Link to="/">Home</Link>
        </div>
    )
}