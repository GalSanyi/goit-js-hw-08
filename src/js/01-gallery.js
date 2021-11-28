// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
const imageMarkUp = galleryItems
    .map(
        (galleryItems) =>

        `<a class="gallery__item" 
    href="${galleryItems.original}">
    <img class="gallery__image" 
    src="${galleryItems.preview}" 
    alt="${galleryItems.description}" />
  </a>`

    )
    .join("");

galleryEl.insertAdjacentHTML('beforeend', imageMarkUp);


const gallery = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,

});

const onEsc = function(evt) {
    if (evt.key === 'ESCAPE') {
        instance.close();
    };
};



const openGallery = function(evt) {
    evt.preventDefault();


    if (evt.target.nodeName !== "IMG") {
        return;
    }

    instance.element().querySelector('img').src = evt.target.dataset.source;


    instance.show()
};


galleryEl.addEventListener('click', openGallery);