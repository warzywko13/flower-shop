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
const imageGallery = document.querySelector("#image-gallery");
openImage(imageGallery);
