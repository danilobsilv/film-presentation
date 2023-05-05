fetch('/json/topRatedMovies.json')
  .then(response => response.json())
  .then(data => {
    const movies = data;

    const gridContainer = document.querySelector('.grid-container');

    movies.forEach(movie => {
      if (movie.overview !== "") { // verifica se o filme tem overview
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const titleElement = document.createElement('div');
        const titleHeading = document.createElement('h3');
        titleHeading.textContent = 'Title';
        const titleParagraph = document.createElement('p');
        titleParagraph.classList.add('title');
        titleParagraph.textContent = movie.title;
        titleElement.appendChild(titleHeading);
        titleElement.appendChild(titleParagraph);

        const overviewElement = document.createElement('div');
        const overviewHeading = document.createElement('h3');
        overviewHeading.textContent = 'Overview';
        const overviewParagraph = document.createElement('p');
        overviewParagraph.classList.add('overview');
        overviewParagraph.textContent = movie.overview;
        overviewElement.appendChild(overviewHeading);
        overviewElement.appendChild(overviewParagraph);

        const popularityElement = document.createElement('div');
        const popularityHeading = document.createElement('h3');
        popularityHeading.textContent = 'Popularity';
        const popularityParagraph = document.createElement('p');
        popularityParagraph.classList.add('popularity');
        popularityParagraph.textContent = movie.popularity;
        popularityElement.appendChild(popularityHeading);
        popularityElement.appendChild(popularityParagraph);

        const releaseDateElement = document.createElement('div');
        const releaseDateHeading = document.createElement('h3');
        releaseDateHeading.textContent = 'Release Date';
        const releaseDateParagraph = document.createElement('p');
        releaseDateParagraph.classList.add('release-date');
        releaseDateParagraph.textContent = movie.release_date;
        releaseDateElement.appendChild(releaseDateHeading);
        releaseDateElement.appendChild(releaseDateParagraph);

        gridItem.appendChild(titleElement);
        gridItem.appendChild(overviewElement);
        gridItem.appendChild(popularityElement);
        gridItem.appendChild(releaseDateElement);

        if (gridItem.children.length > 0) { // verifica se há elementos filho dentro do grid-item
          gridContainer.appendChild(gridItem);
        }
      }
    });
  })
  .catch(error => console.log(error));
