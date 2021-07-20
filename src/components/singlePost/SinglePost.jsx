import "./singlePost.css"

export default function SinglePost() {
    return (
			<div className="singlePost">
				<div className="singlePostWrapper">
					<img
						className="singlePostImg"
						src="https://static.toiimg.com/photo/76076723.cms"
						alt="japan"
					/>
					<h1 className="singlePostTitle">
						Japan
						<div className="singlePostEdit">
							<i className="singlePostIcon far fa-edit"></i>
							<i class="singlePostIcon far fa-trash-alt"></i>
						</div>
					</h1>
					<div className="singlePostInfo">
						<span className="singlePostAuthor">
							Author: <b>Andy</b>
						</span>
						<span className="singlePostDate">
							Date: <b>1 hour ago</b>
						</span>
					</div>
					<p className="singlePostDesc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
						condimentum lacinia quis vel eros donec ac odio. Pharetra massa
						massa ultricies mi quis hendrerit. Nec feugiat nisl pretium fusce id
						velit ut tortor pretium. Nulla pharetra diam sit amet nisl suscipit
						adipiscing. Imperdiet nulla malesuada pellentesque elit eget gravida
						cum sociis. Rhoncus mattis rhoncus urna neque viverra justo nec.
						Semper auctor neque vitae tempus quam pellentesque nec nam. Integer
						feugiat scelerisque varius morbi enim nunc faucibus a. Aliquet risus
						feugiat in ante metus dictum at tempor commodo. Faucibus turpis in
						eu mi bibendum neque. Mauris commodo quis imperdiet massa. Amet
						risus nullam eget felis eget nunc lobortis mattis. Sit amet massa
						vitae tortor condimentum. Aliquam sem fringilla ut morbi tincidunt.
						Interdum varius sit amet mattis. Curabitur gravida arcu ac tortor.
						Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
					</p>
				</div>
			</div>
		);
}
