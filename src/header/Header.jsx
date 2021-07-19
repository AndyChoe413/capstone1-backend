import "./header.css"

export default function header() {
    return (
			<div className="header">
				<div className="headerTitles">
					<span className="headerTitleSm">React & node</span>
					<span className="headerTitleLg">Blog</span>
				</div>
				<img
					src="https://wallpapercave.com/wp/wp3924888.jpg"
					alt="image of Siargao island"
					className="headerImg"
				/>
			</div>
		);
}
