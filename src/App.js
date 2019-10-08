import React from 'react';
import './App.css';
import FashionCatalogPage from './frontend/fashion-app-pages/fashion-catalog-page';
import SearchBox from './frontend/common-input-components/search';

function App() {
	return (
		<div className="App">
			<h1 className="f2 tc">Fashion Catalog Home</h1>
			<SearchBox />
			<FashionCatalogPage />
		</div>
	);
}

export default App;
