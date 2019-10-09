import React from 'react';
import './App.css';
import FashionCatalogPage from './frontend/fashion-app-pages/fashion-catalog-page';
import SearchBox from './frontend/common-input-components/search';
import { garments } from './data-cuts/peek-data/fashion-catalog-data/data-transformations';

function App() {
	return (
		<div className="App">
			<h1 className="f2 tc">The Ultimate Fashion Catalog</h1>
			<SearchBox />
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
}

export default App;
