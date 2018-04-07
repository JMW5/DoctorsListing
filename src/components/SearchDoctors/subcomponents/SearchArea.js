import React from 'react';
import { Col } from 'react-bootstrap';

const SearchArea = () => {
	return (
		<Col className="SearchArea" md={3}>
			<h3 className="" style={{marginBottom: "1em"}}>Distance</h3>
			<input type="range" min="5" max="30" step="5" />
			<p className="" style={{marginTop: "1.5em"}}><span style={{marginRight: "40px"}}>5</span><span style={{marginRight: "33px"}}>10</span><span style={{marginRight: "33px"}}>15</span><span style={{marginRight: "40px"}}>20</span><span style={{marginRight: "40px"}}>25</span><span style={{marginRight: "40px"}}>All</span></p>
			<p className="" style={{marginTop: "1.5em", fontWeight: "bold"}}>CURRENT: ALL MILES FROM<br />66204</p>
			<hr />
			<h3 className="" style={{marginTop: "1em"}} >Gender</h3>
			<div>
				<input type="radio" name="male" id="male" />
				<label className="" for="male" style={{marginLeft: "1em"}}>Male</label>
			</div>
			<div>
				<input type="radio" name="male" id="female" />
				<label className="" for="female" style={{marginLeft: "1em"}}>Female</label>
			</div>
			<div>
				<input type="radio" name="male" id="no-pref" />
				<label className="" for="no-pref" style={{marginLeft: "1em"}}>No Preference</label>
			</div>
		</Col>
	)
}

export default SearchArea;