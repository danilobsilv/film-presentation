const  { getBestMovies2021 } = require( './backend/api/getMovies2021');
const fs = require('fs');

const apiKey = "6f8f868defa0de80c57749ed0f736f66"

getBestMovies2021(apiKey, fs);