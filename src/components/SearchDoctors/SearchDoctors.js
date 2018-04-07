import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ZipCode from './subcomponents/ZipCode';
import DoctorsList from './subcomponents/DoctorsList';
import SearchArea from './subcomponents/SearchArea';

import data from '../../data/doctors.json';
import avatar from '../../assets/avatar.png';


class SearchDoctors extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"zipcode": "",
			"doctorsList": data,
			"distance": 0,
			"gender": ''
		}
	}
	
	onChangeName = (e) => {
		this.setState({
			"zipcode": e.target.value
		})
	}



	
	getZipCode = () => {
		let zip = this.state.zipcode
	
		//Validation
		if (!zip) {
			alert("Must enter Zip Code to continue...")
		} else if (zip.split('').length > 5 || zip.split('').length < 5) {
			alert("Must be a valid Zip Code")
			document.getElementById("zip-input").value = ""
		}
	}



	generateDoctors = (zip) => {

		return this.state.doctorsList.results.map((item, index) => {
			return (
				<div className="Doctors-section">
					<div className="doctor">
						<div className="left-side">
							<img src={avatar} className="avatar" />
							<div>
								<h4 style={{marginBottom: "1em"}}>{item.fullName}</h4>
								<h4>{item.specialties.map((specialty) => {
									return <p style={{listStyle: "none", marginTop: "0.25em"}}>{specialty}</p>
								})}</h4>
							</div>
						</div>
						<div class="right-side">
							<h5>{item.locations.map((location) => {
								return (
									<div className="location-top">
										<h5>{location.name}</h5>
										<p>{Math.round(location.distance)} miles</p>
									</div>
								)
							})}</h5>
						</div>
					</div>
					<hr />
				</div>
			)
		});
	}

	render() {
		return (
			<Grid>
			<ZipCode
				getZipCode={this.getZipCode} 
				changeName={this.onChangeName.bind(this)}
			/>
				<Row>
					<SearchArea />
					<DoctorsList
						initalZipCode={this.state.zipcode}
						doctors={this.generateDoctors.bind(this)}
						numberOfDoctors={this.state.doctorsList.results.length}
					/>
				</Row>
			</Grid>
		);
	}
}



export default SearchDoctors;
