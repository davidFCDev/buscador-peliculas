import React from 'react';

function ListOfMovies({ movies }) {
	return (
		<ul>
			{movies.map(movie => (
				<li key={movie.id}>
					<h3>{movie.tittle}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} alt={movie.tittle} />
				</li>
			))}
		</ul>
	);
}

function NoMoviesResults() {
	return <p>No se han encontrado películas para esta búsqueda</p>;
}

export function Movies({ movies }) {
	const hasMovies = movies?.length > 0;

	return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
