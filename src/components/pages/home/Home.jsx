import { useEffect,useState } from "react"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sideBar/Sidebar"
import axios from "axios"
import { useLocation } from "react-router"


import "./home.css"

const URL = "http://localhost:3001";

export default function Home() {
	//react hook.  can use in function component without class. less cleanup and less code. You don’t have to use many state variables. State variables can hold objects and arrays just fine, so you can still group related data together. However, unlike this.setState in a class, updating a state variable always replaces it instead of merging it.

    //state variables using hooks
    const [posts, setPosts] = useState([])
    //useLocation react router method to find path and data points
    const {search} = useLocation()
    console.log(search);

    //similar to component did mount
    useEffect(() => {
        const fetchPosts = async () => {
            //add search variable for url path to find user
            const posts = await axios.get(`${URL}/api/posts`+ search)
            console.log(posts.data.payload)
            //setting the new states with posts data
            setPosts(posts.data.payload);
        }
        //call the function
        fetchPosts()
        //search will run effect when called // dependency
    }, [search])


	return (
		<>
			<Header />
			<div className="home">
				{/* pass the props into Posts posts={posts}*/}
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
}
