import React from 'react';
import FashionCatalogPage from './fashion-catalog-page';

const GarmentList = ({ garments }) => {
	return (
		<div>
			<FashionCatalogPage
				id={garments[0].product_id}
				image={garments[0].image_urls}
				price={garments[0].price}
				description={garments[0].product_title}
			/>
			<FashionCatalogPage
				id={garments[1].product_id}
				image={garments[1].image_urls}
				price={garments[1].price}
				description={garments[1].product_title}
			/>
		</div>
	);
};

export default GarmentList;
