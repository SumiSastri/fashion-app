import React from 'react';
import FashionCatalogPage from './fashion-catalog-page';

const GarmentList = ({ garments }) => {
	return (
		<div className="womens-garments-page">
			{garments.map((garment, i) => {
				return (
					<FashionCatalogPage
						key={i}
						id={garments[i].product_id}
						image={garments[i].image_urls}
						price={garments[i].price}
						description={garments[i].product_title}
					/>
				);
			})}
		</div>
	);
};
export default GarmentList;
