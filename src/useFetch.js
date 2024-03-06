//custom hooks in react should always starts with use<hookName> 

import { useEffect , useState } from "react"

export default function useFetch(url){

    let [data,setBlog] = useState(null) // -> by using json file
    let [loading,setLoading] = useState(true)
    let [errorMsg,setError] = useState(null)

    useEffect(() => {
        //const abort = new AbortController() // we can use AbortController to abort the fetch, the fetch api
        // can take a second argument that is the signal of the abort and stops the fetch
        
        //fetch(url , {signal:abort.signal}) // dynamic url , when different components calls this means it 
        //will change accordingly
        fetch(url)
            .then(response => {  // response is an object
                if(!response.ok){
                    throw Error("Could not fetch data")
                }
                return response.json()
            })
            .then(data => {
                setBlog(data)
                setLoading(false)
                setError(null)
            })
            .catch(error => {
                console.log(error) // message is the property
                // if(error.name === "AbortError"){
                //     console.log("Fetch was aborted")
                // }
                // else{
                //     setError(error.message)
                //     setLoading(false)
                // }
                setError(error.message)
                setLoading(false)
            })
        //return () => abort.abort() // return the error here and catch it in the catch block using if else
    } ,[url]) // whenever the url changes it re-renders

    return { data,loading,errorMsg } //passing the array as objects
}