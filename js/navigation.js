const navigation = () => {
  const hamburger = document.querySelector("#hamburger-menu");
  const navigationList = document.querySelector("#navigation");

  hamburger.addEventListener("click", () => {
    navigationList.classList.toggle("hide");
    navigationList.classList.toggle("menu_animation");
  });
};

export default navigation;
