function getBestMovies2021(apiKey, fs) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021`;
  
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    const jsonResult = JSON.stringify(data.results, null, 4);
    fs.writeFileSync('backend/json/movieData2021.json', jsonResult);
    return data.results;
  })
  .catch(error => {
    console.error(error);
    return [];
    }); 
  }
  
  
 module.exports = {getBestMovies2021};