import "./topbar.css";

export default function topBar() {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook"></i>
				<i className="topIcon fab fa-twitter-square"></i>
				<i className="topIcon fab fa-instagram"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://www.sunchasingtravelers.com/wp-content/uploads/2020/09/alegria-beach-drone-view-1024x683.jpg"
					alt="My image"
				/>
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
