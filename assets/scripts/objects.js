const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = new Array();

const renderMovies = (filter = "") => {
  console.log("render", movies);
  const movieList = document.getElementById("movie-list");

  if (movies.length <= 0) {
    console.log("render1");
    movieList.classList.remove("visible");
    return;
  } else {
    console.log("render2");
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";

    for (let key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }

    movieEl.textContent = text;

    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const movieTitle = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    movieTitle.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("Please fill the inputs");
    return;
  }

  const newMovie = {
    info: {
      title: movieTitle,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };

  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
};

const searchMovieHandler = () => {
  const filterName = document.getElementById("filter-title").value;
  renderMovies(filterName);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// let person = {
//     "first name": "Max",
//     age: 33,
//     hobbies: ["one", "two"],
//     greet: (newName) => {
//         console.log(this)
//         console.log(newName ? "hello " + newName + "!" : "hello " + person['first name'])
//     }
// }
// // console.log(person)
// // person.IsAdmin = true
// // delete person.age
// // console.log(person)

// const keyName = "key name"
// person.kName = keyName
// // person.greet("me")

// console.log(person)
