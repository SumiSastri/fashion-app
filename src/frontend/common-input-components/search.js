import React from 'react';

const SearchBox = (properties) => {
	return (
		<div className="tr">
			<div className="bg-black mw center pa2 br2-ns ba b--black-10">
				<h3 className="tc white f3">Women's Garments</h3>
				<input
					className="pa2 bw1 w5 f3 h3 br-pill bg-light-yellow "
					type="search"
					placeholder="search our catalog"
				/>
			</div>
		</div>
	);
};
export default SearchBox;
