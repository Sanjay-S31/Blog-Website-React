import { Link } from "react-router-dom"

export default function BlogList(props){
    // export default function BlogList({blog,title,deleteBlog}){  -> can also use like this
    const blog = props.blog
    const title = props.title
    //const func = props.deleteBlog

    return (
        <div>
            <h2>{title}</h2>
            {
                blog.map((item) => (
                    <div className="blog-contents" key={item.id}>
                        <Link to={`/blogs/${item.id}`}>
                            <h2>{item.title}</h2>
                            <p>Written by {item.author}</p>
                            {/* <button onClick={() => func(item.id)}>Delete Blog</button> */}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}