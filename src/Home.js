//import { useEffect, useState } from 'react' // destructuring the useState with {}
//import blogs from './blogs'
import BlogList from './BlogList'
import useFetch from './useFetch'

export default function Home(){
    
    //let [blog,setBlog] = useState(blogs) -> by using js object 

    // function deleteBlog(id){
    //     const updated = blog.filter(item => item.id !== id);
    //     return setBlog(updated)
    // }
    // BASIC USEEFFECT EXAMPLE

    // let [name, setName] = useState("Glen Max")
    // useEffect(() =>{
    //     console.log("useEffect re-renders")
    // }, [name])

    // FETCHING THE DATA FROM THE RESOURCE ENDPOINT

    const { data:blog,loading,errorMsg } = useFetch('http://localhost:8000/blogs') // destructuring the fn. return

    // data:blog -> using the data as blog 

    // when the request is denied or the endpoint doesn't exist means the fetch api cannot fetch the data
    //and the response object doesn't contain the data so we should use throw method
    return(
        <div className="homepage">
            {/* Used for deleting the block and changing the name */}

            {/* <BlogList
                blog={blog}
                title = "All titles : "
                deleteBlog = {deleteBlog}
            />
            <button onClick={() => setName("Prem Kumar")} >Change Name</button>
            <p>Changed name : {name}</p> */}

            { errorMsg && <h1>{ errorMsg }</h1> }
            { loading && <div>Loading ....</div> } 
            { blog && <BlogList blog={blog} title = "All titles : "/> }

        </div>
    )
}


//useEffect hook -> runs the function every render of the component ,used to fetch data while re-renders
// or communicate with  any authentication services
// useEffect second arg. is an dependency array which is initailly empty 
// if you want to add dependency means insert the value into the array and the useEffect only runs when the 
// value in the dependency array changes. If we didn't give '[]' means it will go re-renders infinite times

//json-server  ==> db.json
// blogs is the main resources here and it create end points with this resource & we can delete, add
//items to it
// cmd to start the db's server => npx json-server --watch data/db.json --port 8000