const https = require('https');
const fs = require('fs');

function getMovieData() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=6f8f868defa0de80c57749ed0f736f66';

  https.get(apiUrl, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {

      const movieData = JSON.parse(data);

o
      fs.writeFile('backend/json/movieData.json', JSON.stringify(movieData, null, 2), (err) => {
        if (err) throw err;
        console.log('Os dados do filme foram salvos em movieData.json');
      });
    });
  }).on('error', (err) => {
    console.log('Erro ao obter dados do filme:', err.message);
  });
}

module.exports = {getMovieData};