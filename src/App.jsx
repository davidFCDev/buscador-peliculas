import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import './App.css';
import { useRef } from 'react';

// eslint-disable-next-line no-unused-vars
const API_KEY_OMDB = '6c52a547';
const API_URL = `https://www.omdbapi.com/?${API_KEY_OMDB}=6c52a547&s=avengers`;

function App() {
	const { movies } = useMovies();
	const inputRef = useRef();

	const handleSubmit = event => {
		event.preventDefault();
		const { query } = Object.fromEntries(new window.FormData(event.target));
		console.log({ query });
	};

	return (
		<div className='page'>
			<header>
				<h1>Buscador de películas</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						name='query'
						ref={inputRef}
						placeholder='Avengers, matrix...'
					/>
					<button>Buscar</button>
				</form>
			</header>

			<main>
				<Movies movies={movies} />
			</main>
		</div>
	);
}

export default App;
