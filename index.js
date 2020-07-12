const popup = document.querySelector(".popup-container");
const popupQuote = document.querySelector(".popup-quote-shape");
let pop = false;

const showPopup = () => {
  if (pop === false) {
    popup.classList.remove("hidden");
    popupQuote.classList.remove("hidden");
    pop = true;
  } else {
    popup.classList.add("hidden");
    popupQuote.classList.add("hidden");
    pop = false;
  }
};
