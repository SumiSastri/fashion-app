import React from 'react';

const SearchBox = (properties) => {
	return (
		<div className="bg-black mw center pa2 br2-ns ba b--black-10">
			<input
				className="pa2 bw1 w5 f3 h3 br-pill bg-light-yellow "
				type="search"
				placeholder="search our catalog"
			/>
		</div>
	);
};
export default SearchBox;
