import "./write.css"

export default function write() {
    return (
			<div className="write">
				<img
					src="https://blog.blacklane.com/wp-content/uploads/2020/03/Untitled-design-2020-03-10T163918.861.png"
					alt="switzerland"
					className="writeImg"
				/>
				<form className="writeForm">
					<div className="writeFormGroup">
						<label htmlFor="fileInput">
							<i class="writeIcon fas fa-plus"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
						<input
							className="writeInput"
							type="text"
							placeholder="Title"
							autoFocus={true}
						/>
					</div>
					<div className="writeFormGroup">
						<textarea
							placeholder="Add your story ..."
							type="text"
							className="writeInput writeText"
						></textarea>
					</div>
					<button className="writeSubmit">Publish</button>
				</form>
			</div>
		);
}
