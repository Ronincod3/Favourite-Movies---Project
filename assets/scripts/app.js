const addMovieModal = document.querySelector("#add-modal"); //selecting div child with ID add-modal
const backdropModal = document.querySelector("#backdrop"); //selecting div with ID backdrop
const startAddMovieButton = document.querySelector("header button"); //selecting button inside of header
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive"); //selecting the button inside the modal
const confirmAddMovies = cancelAddMovieButton.nextElementSibling; //selecting the button inside the modal to add a movie
const userInputs = addMovieModal.querySelectorAll("input");

//movies
const movies = [];

//first function to handle the backdrop of the modal (active:inactive)
const toggleBackdropModal = () => {
  backdropModal.classList.toggle("visible");
};

//second function to handle the Add movie modal (active:inactive)
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdropModal();
};

//third function renaming the function for other uses [toggleMovieModal]
const backdropClickHandler = () => {
  toggleMovieModal();
};

//fourth function, this will null the backdrop and modal
const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const clearUserInputs = ()=> {
    for(const usersInput of userInputs){
        usersInput.value = '';
    }
}

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please make sure you enter a valid value");
    return;
  }

  newMovie = {
      title : titleValue,
      image : imageUrlValue,
      rating : ratingValue
  }

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearUserInputs();
};

//Event listeners
startAddMovieButton.addEventListener("click", toggleMovieModal);
backdropModal.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovies.addEventListener("click", addMovieHandler);
