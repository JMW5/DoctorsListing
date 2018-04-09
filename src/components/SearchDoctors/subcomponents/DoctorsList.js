import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

const DoctorsList = (props) => {
	return (
		<Col className="DoctorsList" md={9}>
			{!props.doctors() ? "" :
			<div>
				<h3 className="total-results">Totals Results: {props.doctors().length}</h3>
				{props.doctors()}
			</div>}
		</Col>
	)
}

export default DoctorsList;