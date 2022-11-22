import leafAnimation from "./leafAnimation.js";
import navigation from "./navigation.js";

window.addEventListener("resize", () => {
  leafAnimation();
});

window.addEventListener("load", () => {
  leafAnimation();
  navigation();
});
