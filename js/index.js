import leafAnimation from "./leafAnimation.js";
import navigation from "./navigation.js";
import openImage from "./imageGallery/openImage.js";

window.addEventListener("resize", () => {
  leafAnimation();
});

window.addEventListener("load", () => {
  leafAnimation();
  navigation();
});

/* Gallery Image Settings */
const images = document.querySelectorAll(".image-gallery img");
const imageGallery = document.querySelector(".image-gallery");

images.forEach((img, id) =>
  img.addEventListener("click", () => {
    openImage(imageGallery, images, id);
  })
);
