import React from 'react';

const FashionCatalogPage = (props) => {
	return (
		<div className="womens-garments-page">
			<h3 className="f2 tc">Women's Garments</h3>
			<div className="image-container">
				<img
					className="dib br pa2 ma2 grow bg-animate transition: background-color .10s ease-in-out tc ba bw2 shadow-6"
					src={props.image}
					alt="grey-dress"
				/>
				<h4 className="f4 pa1">{props.description}</h4>
				<h5 className="f5 pa1">{props.price}</h5>
			</div>
		</div>
	);
};
export default FashionCatalogPage;
