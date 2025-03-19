import { getData } from './app-logic.js'

const submitButton = document.querySelector("#submit-button");
const searchInput = document.querySelector("#search-input");

submitButton.addEventListener("click", (event) => {
    //prevent default submit conditions from firing when the button is clicked so we can do our own event handling
    event.preventDefault();

    //call getData, passing the current .value of the searchInput element as argument
    getData(searchInput.value);

    //reset input value back to nothing
    searchInput.value = "";
});
