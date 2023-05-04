import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="PropertyCard">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}