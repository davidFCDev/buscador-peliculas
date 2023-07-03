import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import './App.css';

// eslint-disable-next-line no-unused-vars
const API_KEY_OMDB = '6c52a547';
const API_URL = `https://www.omdbapi.com/?${API_KEY_OMDB}=6c52a547&s=avengers`;

function App() {
	const { movies: mappedMovies } = useMovies();

	return (
		<div className='page'>
			<header>
				<h1>Buscador de películas</h1>
				<form className='form'>
					<input placeholder='Avengers, matrix...' />
					<button type='submit'>Buscar</button>
				</form>
			</header>

			<main>
				<Movies movies={mappedMovies} />
			</main>
		</div>
	);
}

export default App;
