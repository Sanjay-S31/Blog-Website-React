import { useParams,useNavigate } from "react-router-dom"
import useFetch from "./useFetch"


export default function Details(){
    const {id} = useParams() //the useParams get the attributes of the link above that contains the id
    // we are destructuring the object in the above line or else we can use it like this also.
    // const obj = useParams()
    // console.log(obj.id)
    console.log(id) 

    // Calling the custom hook useFetch with the required url of the blog id
    // This will return 3 properties so destructuring here itself , refer useFetch also
    const { data : blog,loading,errorMsg } = useFetch("http://localhost:8000/blogs/" + id)
    console.log(blog)
    const navigate = useNavigate();

    function deleteBlog(){
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method : "DELETE"
        })
        .then(() => {
            navigate('/')
        })
    }
    return(
        <div className="blog-details">
            <h1>Details of blogs</h1>
            { errorMsg && <h1>{ errorMsg }</h1> }
            { loading && <div>Loading ....</div> }
            { blog && (
                <div>   
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.description}</div>
                    <button onClick={deleteBlog} >Delete</button>
                </div>
            )}
        </div>
    )
}