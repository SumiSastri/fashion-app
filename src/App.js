import React, { Component } from 'react';
import './App.css';
import SearchBox from './frontend/common-input-components/search';
import GarmentList from './frontend/fashion-app-pages/garment-list';
import { garments } from './data-cuts/peek-data/fashion-catalog-data/data-transformations';

class App extends Component {
	constructor() {
		super();
		this.state = {
			garments: garments,
			searchfield: ''
		};
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filteredGarments = this.state.garments.filter((garments) => {
			return garments.product_title.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="App">
				<h1 className="f2 tc">The Ultimate Fashion Catalog</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<GarmentList garments={filteredGarments} />
			</div>
		);
	}
}
export default App;
