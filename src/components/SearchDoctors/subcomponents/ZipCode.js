import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

const ZipCode = (props) => {

	return (
		<div className="ZipCode-section">
			<FormGroup className="ZipCode--input" controlId="formBasicText">
				<ControlLabel className="ZipCode--label">Zip Code</ControlLabel>
				<FormControl
				type="text"
				value={props.zipValue}
				onChange={(event) => props.updateZipCode(event)}
				id="zip-input"
				/>
				<FormControl.Feedback />
			</FormGroup>
			<Button onClick={props.handleClick} className="btnSearch" bsStyle="success">Search</Button>
		</div>
	);
}

export default ZipCode;