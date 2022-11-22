const leafFileLocation = "./../img/leafts/";
const leafts = [
  "leaft1.png",
  "leaft2.png",
  "leaft3.png",
  "leaft4.png",
  "leaft5.png",
  "leaft6.png",
  "leaft7.png",
  "leaft8.png",
  "leaft9.png",
  "leaft10.png",
  "leaft11.png",
  "leaft12.png",
  "leaft13.png",
  "leaft14.png",
];

const leafAnimation = () => {
  const leaftsLocation = document.querySelector("#leafts");
  const width = window.innerWidth;
  leaftsLocation.innerHTML = ""; //reset

  leafts.map((item, key) => {
    if (width <= 1258 && key >= 12) {
      return 0;
    }
    if (width <= 1044 && key >= 9) {
      return 0;
    }
    if (width <= 885 && key >= 6) {
      return 0;
    }
    if (width <= 684 && key >= 4) {
      return 0;
    }

    leaftsLocation.innerHTML += `<img src="${leafFileLocation + item}">`;
  });
};

export default leafAnimation;
