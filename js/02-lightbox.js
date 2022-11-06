import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onGaleryItemCkick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  enableKeyboard: true,
});

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"  />
      </a>`
    )
    .join("");
}
function onGaleryItemCkick(event) {
  event.preventDefault();
}
