import { useState } from "react"
import { useNavigate } from "react-router-dom"
//useHistory is used to send the user to the prevoius page or to the homepage also
export default function Create(){

    let [title,setTitle] = useState("")
    let [author,setAuthor] = useState("sanjay")
    let [blogContent,setBlogContent] = useState("")
    let [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault() // it prevents the page from reloading when submitting the form
        const blog = {title , blogContent , author}
        //console.log(blog)

        setLoading(true)
        //Sending the form input to the resource endpoint (db.json) 
        //The second parameter of the fetch api is used to send the data to endpoint 
        fetch("http://localhost:8000/blogs" , {
            method:'POST', // method post
            headers: {"Content-Type" : "application/json"}, // mentioning the data-type
            body: JSON.stringify(blog) //converting the js object into json
        }).then(() => { // if the fetch is completed the response will come as a 'promise' and we are 
            setLoading(false) // capturing it in the then block
            console.log("New Blog added")
            //history.go(-1) used to go to the previous page
            navigate('/') //navigates to the homepage
        })
    }

    return (
        <div className="create-blog">
            <h2>Add a title : </h2>
            <form className="form-inputs" onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog Content</label>
                <textarea
                    required
                    value={blogContent}
                    onChange={(event) => setBlogContent(event.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="Sanjay" >Sanjay</option>
                    <option value="Max" >Max</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding...</button>}

                {/* <p>{title}</p>
                <p>{author}</p>
                <p>{blogContent}</p> */}
            </form>
        </div>
    )
}