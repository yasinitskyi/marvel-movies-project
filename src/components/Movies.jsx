import React from 'react';
import {Movie} from './Movie'

function Movies(props) {
    return (
		<div className="movies">
			{props.movies.map((movie) => (<Movie poster={movie.Poster} title={movie.Title} year={movie.Year} key={movie.imdbID}/>))}
		</div>
		);
}

export { Movies };