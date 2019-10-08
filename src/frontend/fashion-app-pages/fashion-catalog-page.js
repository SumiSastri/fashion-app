import React, { Component } from 'react';

class FashionCatalogPage extends Component {
	render() {
		return (
			<div>
				<p className="f4 tc">I will be a fashion catalog page when I grow up!</p>
				<img src="I will be pictures when I grow up!" alt="fashion-catalog-images" />
			</div>
		);
	}
}
export default FashionCatalogPage;

fetch(
	'https://s3-eu-west-1.amazonaws.com/stylr-ai-engine-srv-data/srv/data/archive/zalando-women-07-10-2017/garment_items.jl'
)
	.then((response) => response.json())
	.then((data) => console.log(data));
