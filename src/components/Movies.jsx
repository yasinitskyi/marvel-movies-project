import React from 'react';
import {Movie} from './Movie'

function Movies({movies = []}) {
    return (
		<div className="movies">
			{movies.length ? 
				movies.map((movie) => (<Movie poster={movie.Poster} title={movie.Title} year={movie.Year} key={movie.imdbID}/>))
			 	: 
				<h6>Nothing was found</h6>}
		</div>
		);
}

export { Movies };