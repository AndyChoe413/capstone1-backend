import React from 'react'
import "./sidebar.css"

export default function sidebar() {
    return (
			<div className="sidebar">
				<div className="sidebarItem">
					<span className="sidebarTitle">ABOUT ME</span>
					<img
						src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
						alt="selfie"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="sidebarItem">
					<span className="sidebarTitle">CATEGORIES</span>
					<ul className="sidebarList">
						<li className="sidebarListItem">Life</li>
						<li className="sidebarListItem">Music</li>
						<li className="sidebarListItem">Tech</li>
						<li className="sidebarListItem">Places</li>
					</ul>
				</div>
				<div className="sidebarItem">
					<span className="sidebarTitle">FOLLOW US</span>
					<div className="sidebarSocial">
						<i className="sidebarIcon fab fa-facebook"></i>
						<i className="sidebarIcon fab fa-twitter-square"></i>
						<i className="sidebarIcon fab fa-instagram"></i>
						<i className="sidebarIcon fab fa-pinterest-square"></i>
					</div>
				</div>
			</div>
		);
}
