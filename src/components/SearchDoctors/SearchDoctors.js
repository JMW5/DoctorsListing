import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ZipCode from './subcomponents/ZipCode';
import DoctorsList from './subcomponents/DoctorsList';
import SearchArea from './subcomponents/SearchArea';

import data from '../../data/doctors.json';
import avatar from '../../images/avatar.png';


class SearchDoctors extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"doctorsList": [],
			"distance": "ALL",
			"showDistance": false,
			"gender": "male",
			"value": ""
		}
	}

	
	onChangeZipCode = (e) => {
		this.setState({
			"value": parseInt(e.target.value)
		})
	}

	onChangeDistanceSlider = (e) => {
		this.setState({
			"distance": e.target.value,
		})
	}

	onChangeGender = (e) => {
		this.setState({
			"gender": e.target.value
		})
	}


	handleClick = () => {
		this.validateZipCode()
	}


	validateZipCode = () => {
		//Get Zip Code
		const zipCode = this.state.value
		const zipCodeLength = zipCode.toString().split('').length

		//Validate Zip
		if (!zipCode) {
			alert("Must enter Zip Code to continue...")
		} else if (zipCodeLength > 5 || zipCodeLength < 5 || typeof zipCode !== "number") {
			alert("Must be a valid Zip Code")
			document.getElementById('zip-input').value = ''
			console.log(zipCode)
		} else {
			this.setState({
				"doctorsList": data,
				"showDistance": true
			})
		}
	}


	generateDoctors = () => {
		const filterDoctorResults = (result) => {
			
			//Get distance from results and from input
			const distance = Math.round(result.locations[0].distance)
			const inputDistance = this.state.distance

			//Get gender data from results and from radio buttons
			let gender = result.gender
			const inputGender = this.state.gender

			return distance >= inputDistance && gender == inputGender
		}
	

        if (this.state.doctorsList.results) {
			const filteredListOfDoctors = this.state.doctorsList.results.filter(filterDoctorResults)
			const doctorsList = this.state.doctorsList.results

			//If distance input has value of "ALL" then load original results else load filtered list
			if (this.state.distance == "ALL" || this.state.distance == 30) {
				return doctorsList.map(this.doctorSection)
			} else {
				return filteredListOfDoctors.map(this.doctorSection)
			}
		}
	}


	doctorSection = (item, index) => {

		return (
			<div className="Doctors-section">
				<div className="doctor">
					<div className="left-side">
						<img src={avatar} className="avatar" />
						<div>
							<h4 className="doctor--fullname" style={{marginBottom: "1em"}}><a href="{item.url}" className="doctor--link">{item.fullName}</a></h4>
							<h4 className="doctor--specialty">{item.specialties.sort().map((specialty) => {
								return <p style={{listStyle: "none", marginTop: "0.25em"}}>{specialty}</p>
							})}</h4>
						</div>
					</div>
					<div className="right-side">
						<div>{item.locations.map((location) => {
							return (
								<div className="location-top">
									<h5 className="location"><a href={location.url} className="location--link">{location.name}</a></h5>
									<p className="location-distance">{Math.round(location.distance)} {Math.round(location.distance) === 1 ? 'mile' : 'miles'}</p>
								</div>
							)
						})}</div>
					</div>
				</div>
				<hr />
			</div>
		)
	}



	render() {
		return (
			<Grid>
			<ZipCode
				handleClick={this.handleClick} 
				updateZipCode={this.onChangeZipCode}/>
				<Row>
					<SearchArea 
						handleClick={this.handleClick.bind(this)} 
						zipCode={this.state.value}
						distance={this.state.distance}
						showDistance={this.state.showDistance}
						updateDistanceSlider={this.onChangeDistanceSlider.bind(this)}
						updateGender={this.onChangeGender.bind(this)}/>
					<DoctorsList
						doctors={this.generateDoctors.bind(this)}/>
				</Row>
			</Grid>
		);
	}
}



export default SearchDoctors;
