import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

const ZipCode = (props) => {

	return (
		<div className="ZipCode-section">
			<FormGroup className="ZipCode--input" controlId="formBasicText">
				<ControlLabel>Zip Code</ControlLabel>
				<FormControl
				type="text"
				onChange={(event) => props.changeName(event)}
				placeholder="Enter Zip Code"
				id="zip-input"
				/>
				<FormControl.Feedback />
			</FormGroup>
			<Button onClick={props.getZipCode.bind(this)} className="btnSearch" bsStyle="success">Search</Button>
		</div>
	);
}

export default ZipCode;