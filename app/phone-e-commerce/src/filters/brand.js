import { getElement } from "../utilit.js";
import { display } from "../displayProduct.js";

const setUpBrands = (store) => {
  let brands = ["all", ...new Set(store.map((product) => product.brand))];
  const brandsBtn = getElement(".brands");
  brandsBtn.innerHTML = brands
    .map((brand) => `<button class="brand-btn">${brand}</button>`)
    .join("");
  // filter funtion
  brandsBtn.addEventListener("click", (e) => {
    const brandelement = e.target;
    if (brandelement.classList.contains("brand-btn")) {
      let newStore = [];
      if (brandelement.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (str) => str.brand === brandelement.textContent,
        );
      }
      display(newStore, getElement(".phones-container"));
    }
  });
};

export { setUpBrands };
