import React from 'react';
import './App.css';
// import FashionCatalogPage from './frontend/fashion-app-pages/fashion-catalog-page';
import SearchBox from './frontend/common-input-components/search';
import GarmentList from './frontend/fashion-app-pages/garment-list';
import { garments } from './data-cuts/peek-data/fashion-catalog-data/data-transformations';

function App() {
	return (
		<div className="App">
			<h1 className="f2 tc">The Ultimate Fashion Catalog</h1>
			<SearchBox />
			<GarmentList garments={garments} />
		</div>
	);
}

export default App;
