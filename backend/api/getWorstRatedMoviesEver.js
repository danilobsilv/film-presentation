function getWorstRatedMoviesEver(apiKey, fs) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=1000`;
    
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          const jsonResult = JSON.stringify(data.results, null, 4);
          fs.writeFileSync('backend/json/worstRatedMoviesEver.json', jsonResult);
          return data.results;
        })
        .catch(error => {
          console.error(error);
          return [];
        });
    }
    
module.exports = { getWorstRatedMoviesEver };
    