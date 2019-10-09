import React from 'react';

const FashionCatalogPage = ({ image, description, price }) => {
	return (
		<div className="image-container">
			<img
				className="bg-gold dib  pa2 ma2 grow bg-animate transition: background-color .10s ease-in-out tc ba bw2 shadow-6"
				src={image}
				alt="womens-garments"
			/>
			<h4 className="f4 pa1">{description}</h4>
			<h5 className="f5 pa1">{price}</h5>
		</div>
	);
};
export default FashionCatalogPage;
