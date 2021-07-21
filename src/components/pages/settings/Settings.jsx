import Sidebar from "../../sideBar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
			<div className="settings">
				<div className="settingsWrapper">
					<div className="settingsTitle">
						<span className="settingsUpdateTitle">Update your account</span>
						<span className="settingsUpdateTitle">Delete Account</span>
					</div>
					<form className="settingsForm">
						<label>Profile Picture</label>
						<div className="settingsProfilePic">
							<img src="" alt="" />
							<label htmlFor="fileInput">
								<i className="profilePicIcon far fa-user"></i>
							</label>
							<input type="file" id="fileInput" style={{ display: "none" }} />
						</div>
						<label>Username</label>
						<input type="text" placeholder="Andy" />
						<label>Username</label>
						<input type="text" placeholder="Andy" />
						<label>Username</label>
						<input type="text" placeholder="Andy" />
						<label>Username</label>
					</form>
				</div>
				<Sidebar />
			</div>
		);
}
