import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_img"
					src="https://www.cined.com/content/uploads/2021/03/primevideo-feat-1300x750.jpg"
					alt="homeImg"
				/>
				<div className="home_row">
					<Product />
                    <Product />
					
				</div>
				<div className="home_row"></div>
				<div className="home_row"></div>
			</div>
		</div>
	);
}

export default Home;
