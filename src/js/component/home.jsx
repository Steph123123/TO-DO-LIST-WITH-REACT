import React from "react";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center mt-5">Steph´s to do list!</h1>

			<div class="input-group mb-3 d-flex justify-content-center">
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
				/>
			</div>
			<div className="button">
				<a
					href="#"
					className="btn btn-success d-flex justify-content-center">
					Save task!
				</a>
			</div>
			<div className="trex d-flex justify-content-center">
				<img
					src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42676/t-rex-emoji-clipart-md.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Home;
