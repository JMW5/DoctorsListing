import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

const DoctorsList = (props) => {
	return (
		<Col className="DoctorsList" md={9}>
			{(props.initalZipCode.split('').length === 5) ?
				<div>
					<h3>Totals Results: {props.numberOfDoctors}</h3>
					{props.doctors()}
				 </div> : 
				 "Please Search Something"
			 }
		</Col>
	)
}

export default DoctorsList;