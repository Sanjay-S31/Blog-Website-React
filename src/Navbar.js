import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className="navbar">
            <h1>Bloggers.com</h1>
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/about">About Us</Link>
            </nav>
        </div>
    )
}