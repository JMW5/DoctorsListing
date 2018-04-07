import React, { Component } from 'react';
import gradient from '../../assets/gradient.png';
import logo from '../../assets/logo.svg';


class Header extends Component {

	render() {
		return (
			<div className="Header-section">	
				<img src={gradient} className="Header--image" />
				<div className="Header">
					<img src={logo} className="Header-logo" />
				</div>
			</div>
		)
	}	
}

export default Header;