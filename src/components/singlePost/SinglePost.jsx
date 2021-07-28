import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios"
import "./singlePost.css"
import { Link } from "react-router-dom";

//backend URL
const URL = "http://localhost:3001";

export default function SinglePost() {
	//react router method to grab path and id
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	
	const[post,setPost] = useState({})

	// If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
	useEffect(() => {
		const getPost = async () => {
			//async await axios to backend URL including path which contains id
			const result = await axios.get(`${URL}/api/posts/` + path);
			console.log(result.data);
			//set post variable with setPost hook in state
			setPost(result.data.payload)
		};
		getPost();
		// if the path changes run useEffect
	}, [path]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (
					<img className="singlePostImg" src={post.photo} alt="" />
				)}

				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author:
						{/* when authors name is clicked will reroute to authors posts */}
						<Link to={`/?user=${post.username}`} className="link">
							<b> {post.username.toUpperCase()}</b>
						</Link>
					</span>
					<span className="singlePostDate">
						{/* converts date */}
						<b>{new Date(post.createdAt).toDateString()}</b>
					</span>
				</div>
				<p className="singlePostDesc">{post.desc}</p>
			</div>
		</div>
	);
}
