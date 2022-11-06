import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-source="${original}"
        />
      </a>
    </div>`
    )
    .join("");
}

galleryContainer.innerHTML = createGalleryItems(galleryItems);

galleryContainer.addEventListener("click", onGaleryItemCkick);

function onGaleryItemCkick(event) {
  event.preventDefault();
  const { target } = event;
  const selectedItem = target.dataset.source;
  if (!selectedItem) {
    return;
  }
  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${selectedItem}" width="800" height="600">
    </div>
`);
  instance.show();

  document.addEventListener("keydown", onEscapeClose);
  function onEscapeClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
