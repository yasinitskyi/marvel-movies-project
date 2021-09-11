import React from 'react';

function Movie(props) {
	return (
		<div className="card movie">
			<div className="card-image">
				<img className='poster' src={props.poster} />
			</div>
			<div className="card-content">
				<span className="card-title">{props.title.length > 30 ? props.title.slice(0, 30) + '...' : props.title}</span>
				<p className="card-subtitle">{props.year}</p>
			</div>
			<div className="card-action">
				<a href="#">More</a>
			</div>
		</div>
	);
}

export { Movie };