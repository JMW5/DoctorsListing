import React from 'react';
import { Col } from 'react-bootstrap';

const SearchArea = (props) => {

	if (props.showDistance) {
		return (
			<Col className="SearchArea" md={3}>
				<h3 className="searchArea--title" style={{marginBottom: "1em"}}>Distance</h3>
				<div className="searchArea--misc">
					<input type="range" min="5" max="30" step="5" className="searchArea--range" onChange={(event) => props.updateDistanceSlider(event) } />
					<p  style={{marginTop: "1.5em"}}><span style={{marginRight: "40px"}}>5</span>
													 <span style={{marginRight: "33px"}}>10</span>
													 <span style={{marginRight: "36px"}}>15</span>
													 <span style={{marginRight: "37px"}}>20</span>
													 <span style={{marginRight: "29px"}}>25</span>
													 <span>All</span></p>
					<p style={{marginTop: "1.5em", fontWeight: "bold"}}>CURRENT: {props.distance} MILES FROM<br />{props.zipCode}</p>
				</div>
				<hr />
				<h3 className="searchArea--title" style={{marginTop: "1em"}} >Gender</h3>
				<div className="searchArea--radioBtns">
					<div>
						<input type="radio" name="male" id="male" value="Male" onChange={(event) => props.updateGender(event)} />
						<label className="" for="male" style={{marginLeft: "1em"}}>Male</label>
					</div>
					<div>
						<input type="radio" name="male" id="female" value="Female" onChange={(event) => props.updateGender(event)} />
						<label className="" for="female" style={{marginLeft: "1em"}}>Female</label>
					</div>
					<div>
						<input type="radio" name="male" id="no-pref" value="no-pref" onChange={(event) => props.updateGender(event)} />
						<label className="" for="no-pref" style={{marginLeft: "1em"}}>No Preference</label>
					</div>
				</div>
			</Col>
		)
	} else {
		return null
	}	
}

export default SearchArea;