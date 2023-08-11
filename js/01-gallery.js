import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)


const ulGallery = document.querySelector(".gallery");
console.log(ulGallery)



function galleryLayoutTemplate(elements) {
    return elements.map((element) => 


`<li class="gallery__item">
  <a class="gallery__link" href="l${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`
).join('');
}
ulGallery.insertAdjacentHTML("afterbegin", galleryLayoutTemplate(galleryItems));


let instance; 

ulGallery.addEventListener("click", onImageClick);
function onImageClick(evt) {
    evt.preventDefault(); 

    if (evt.target.nodeName !== "IMG")
        return;

    instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
}

ulGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        instance.close();
    }
}); 






