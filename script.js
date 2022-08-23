const API_KEY = '0dd612ffd04851142d17f3b6df79d26b';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0dd612ffd04851142d17f3b6df79d26b&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=0dd612ffd04851142d17f3b6df79d26b&query="';
const form = document.getElementById('form');
const search_API = document.querySelector("input");
const main = document.querySelector("main");

//  Get initial Movies
getMovies(API_URL)

async function getMovies(url) {
    const resp = await fetch(url)
    const data = await resp.json()

    showMovies(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search_API.value

    if (searchTerm && searchTerm !== "") {
        console.log(searchTerm)
        getMovies(SEARCH_URL + searchTerm)
        search_API.value = "";
    } else {
        window.location.reload
    }
})

function showMovies(movies) {
    main.innerHTML = ""

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement("div")
        movieEl.classList.add('movie')

        movieEl.innerHTML = `<main id="main">
            <img src=${ IMG_PATH + poster_path} alt=${title}>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>`

        main.appendChild(movieEl)
    })
}



function getClassByRate(vote) {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
}






{/* <div class="movie">
<img src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hJTIwc2VhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="">
<div class="movie-info">
    <h3>Movie Title</h3>
    <span class="green">9.8</span>
</div>
<div class="overview">
    <h3>Overview</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed, debitis impedit aperiam modi at dignissimos earum. Nam architecto doloremque minus amet ullam, ex laborum reiciendis eaque dolorem, facere illo!
    Quia ipsum ipsam modi, tempore animi, voluptates libero voluptatum eaque velit est, rem aliquid impedit incidunt! A sint inventore eum qui error, fuga fugit quas veniam autem corporis laudantium dolore.
    </p>
</div>
</div>

<div class="movie">
<img src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hJTIwc2VhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="">
<div class="movie-info">
    <h3>Movie Title</h3>
    <span class="green">9.8</span>
</div>
<div class="overview">
    <h3>Overview</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed, debitis impedit aperiam modi at dignissimos earum. Nam architecto doloremque minus amet ullam, ex laborum reiciendis eaque dolorem, facere illo!
    Quia ipsum ipsam modi, tempore animi, voluptates libero voluptatum eaque velit est, rem aliquid impedit incidunt! A sint inventore eum qui error, fuga fugit quas veniam autem corporis laudantium dolore.
    </p>
</div>
</div>

<div class="movie">
<img src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2luZW1hJTIwc2VhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="">
<div class="movie-info">
    <h3>Movie Title</h3>
    <span class="green">9.8</span>
</div>
<div class="overview">
    <h3>Overview</h3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed, debitis impedit aperiam modi at dignissimos earum. Nam architecto doloremque minus amet ullam, ex laborum reiciendis eaque dolorem, facere illo!
    Quia ipsum ipsam modi, tempore animi, voluptates libero voluptatum eaque velit est, rem aliquid impedit incidunt! A sint inventore eum qui error, fuga fugit quas veniam autem corporis laudantium dolore.
</div>
</div> */}