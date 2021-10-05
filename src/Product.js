import React from "react";
import "./Product.css";

function Product() {
	return (
		<div className="product">
			<div className="product_info">
				<p>The Lean Startup</p>
				<p className="product_price">
					<small>$</small>
					<strong>11.95</strong>
				</p>
				<div className="product_rating">
					<p>⭐</p>
				</div>
			</div>
			<img
				src="https://books.google.lk/books/content?id=19forYX7NLQC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71FHScze0NQ9zDoaeHLknHeADKhSwMDJYvHYWWJfAuZ9LeBucsIvXY5Np9WAaIzMHCh9f3CszBbDoOmbh6e81oIoWHCKBkJ61orIxDG6gPc2VH7dGxBJaOJsXItz2llieG2KXTM"
				alt="book_img"
			/>
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
