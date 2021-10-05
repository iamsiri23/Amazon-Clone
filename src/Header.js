import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";

function Header() {
	return (
		<div className="header">
			<img
				className="header_logo"
				src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg"
				alt="headerLogo"
			/>
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header_nav">
				<div className="header_option">
					<span className="header_option1">Hello Guest</span>
					<span className="header_option2">Sign In</span>
				</div>
				<div className="header_option">
					<span className="header_option1">Returns</span>
					<span className="header_option2">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header_option1">Your</span>
					<span className="header_option2">Prime</span>
				</div>
				<div className="header_option"></div>
				<div className="header_optionBasket">
					<ShoppingBasket />
					<span className="header_option2 header_basketCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
