const addMovieModal = document.querySelector('#add-modal');  //selecting div child with ID add-modal
const backdropModal = document.querySelector('#backdrop'); //selecting div with ID backdrop
const startAddMovieButton = document.querySelector('header button'); //selecting button inside of header
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive'); //selecting the button inside the modal

//first function to handle the backdrop of the modal (active:inactive)
const toggleBackdropModal = () => {
backdropModal.classList.toggle('visible');
};

//second function to handle the Add movie modal (active:inactive)
const toggleMovieModal = () => {
addMovieModal.classList.toggle('visible');
toggleBackdropModal();
};

//third function renaming the function for other uses [toggleMovieModal]
const backdropClickHandler = ()=>{
    toggleMovieModal();
};

//fourth function, this will null the backdrop and modal
const cancelAddMovieHandler = ()=>{
    toggleMovieModal();
}

//Event listeners
startAddMovieButton.addEventListener('click', toggleMovieModal);
backdropModal.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
