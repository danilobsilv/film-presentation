const fs = require('fs');


async function getMovies(apiKey, releaseYear, page = 1, fileName = 'movieData.json') {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${releaseYear}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;

    const json = JSON.stringify(movies, null, 4);
    fs.writeFileSync(`backend/json/${fileName}`, json, { encoding: 'utf8' });

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = { getMovies };