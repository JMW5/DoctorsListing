import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import heroImage from '../../assets/hospital.png';

const HeroImage = () => {
	return (
		<Grid>
			<Row>
				<Col className="HeroImage-section" md={12}> 
					<img src={heroImage} />
				</Col>
			</Row>
		</Grid>
	)
}

export default HeroImage;