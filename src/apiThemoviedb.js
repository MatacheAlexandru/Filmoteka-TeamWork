import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODY5NTRhNjg2NzcwMmUyODAyZGQzMWRjZjQ2ODBmNyIsIm5iZiI6MTcyMTcyMjcxNS4zOTkxNzksInN1YiI6IjY2OWVlYmZlZmI4MmI5NGYxZjEwMWU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zy2enJXa7QnMeqytWtmlE536x8h1fg53AIcH4cGyDDI'; // Cheia ta API
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchFromAPI(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`, // Bearer Token în header
      },
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error.response);
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

// Obține informații despre un film după ID
async function getMovieById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(`Failed to fetch movie by ID: ${movieId}`, error);
    throw error;
  }
}

// Obține lista de filme populare
async function getPopularMovies() {
  const url = `${BASE_URL}/movie/popular`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch popular movies', error);
    throw error;
  }
}

// Caută filme după nume
async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?query=${query}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(`Failed to search movies with query: ${query}`, error);
    throw error;
  }
}

// Obține informații despre un actor după ID
async function getActorById(actorId) {
  const url = `${BASE_URL}/person/${actorId}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(`Failed to fetch actor by ID: ${actorId}`, error);
    throw error;
  }
}

// Obține lista de actori populari
async function getPopularActors() {
  const url = `${BASE_URL}/person/popular`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch popular actors', error);
    throw error;
  }
}

// Obține lista de genuri pentru filme
async function getMovieGenres() {
  const url = `${BASE_URL}/genre/movie/list`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch movie genres', error);
    throw error;
  }
}

// Obține filmele de top
async function getTopRatedMovies() {
  const url = `${BASE_URL}/movie/top_rated`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch top rated movies', error);
    throw error;
  }
}

// Obține lista de filme în cinematografe
async function getNowPlayingMovies() {
  const url = `${BASE_URL}/movie/now_playing`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch now playing movies', error);
    throw error;
  }
}

// Obține informații despre o emisiune TV după ID
async function getTVShowById(tvShowId) {
  const url = `${BASE_URL}/tv/${tvShowId}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(`Failed to fetch TV show by ID: ${tvShowId}`, error);
    throw error;
  }
}

// Caută emisiuni TV după nume
async function searchTVShows(query) {
  const url = `${BASE_URL}/search/tv?query=${query}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(`Failed to search TV shows with query: ${query}`, error);
    throw error;
  }
}

// Obține lista de emisiuni TV populare
async function getPopularTVShows() {
  const url = `${BASE_URL}/tv/popular`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch popular TV shows', error);
    throw error;
  }
}

// Obține lista de emisiuni TV de top
async function getTopRatedTVShows() {
  const url = `${BASE_URL}/tv/top_rated`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch top rated TV shows', error);
    throw error;
  }
}

// Obține lista de emisiuni TV în desfășurare
async function getOnTheAirTVShows() {
  const url = `${BASE_URL}/tv/on_the_air`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error('Failed to fetch on the air TV shows', error);
    throw error;
  }
}

// Obține detalii despre sezonul unei emisiuni TV
async function getTVSeasonDetails(tvShowId, seasonNumber) {
  const url = `${BASE_URL}/tv/${tvShowId}/season/${seasonNumber}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(
      `Failed to fetch TV season details for show ID: ${tvShowId}, season: ${seasonNumber}`,
      error
    );
    throw error;
  }
}

// Obține detalii despre un episod al unei emisiuni TV
async function getTVEpisodeDetails(tvShowId, seasonNumber, episodeNumber) {
  const url = `${BASE_URL}/tv/${tvShowId}/season/${seasonNumber}/episode/${episodeNumber}`;
  try {
    return await fetchFromAPI(url);
  } catch (error) {
    console.error(
      `Failed to fetch TV episode details for show ID: ${tvShowId}, season: ${seasonNumber}, episode: ${episodeNumber}`,
      error
    );
    throw error;
  }
}

export {
  getMovieById,
  getPopularMovies,
  searchMovies,
  getActorById,
  getPopularActors,
  getMovieGenres,
  getTopRatedMovies,
  getNowPlayingMovies,
  getTVShowById,
  searchTVShows,
  getPopularTVShows,
  getTopRatedTVShows,
  getOnTheAirTVShows,
  getTVSeasonDetails,
  getTVEpisodeDetails,
};
