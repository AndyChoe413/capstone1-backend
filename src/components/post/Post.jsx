import "./post.css"

export default function post() {
    return (
			<div className="post">
				<img
					className="postImg"
					src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20201116111704&q=80&rw=750&rh=536"
					alt=""
				/>
				<div className="postInfo">
					<div className="postNames">
						<span className="postName">Places to visit</span>
						<span className="postName">Places visited</span>
					</div>
					<span className="postTitle">Bucket list journeys</span>
					<hr />
					<span className="postDate">1 hour ago</span>
				</div>
				<p className="postDesc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
					condimentum lacinia quis vel eros donec ac odio. Pharetra massa massa
					ultricies mi quis hendrerit. Nec feugiat nisl pretium fusce id velit
					ut tortor pretium. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Tortor condimentum lacinia quis vel eros donec ac odio.
					Pharetra massa massa ultricies mi quis hendrerit. Nec feugiat nisl
					pretium fusce id velit ut tortor pretium.
				</p>
			</div>
		);
}
