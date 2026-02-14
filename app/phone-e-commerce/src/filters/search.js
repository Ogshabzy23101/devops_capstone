import { getElement } from "../utilit.js";
import { display } from "../displayProduct.js";

const setUpSearch = (store) => {
  const form = getElement(".input-form");
  const formInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = formInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        let { model } = product;
        model = model.toLowerCase();
        if (model.startsWith(value)) {
          return product;
        }
      });

      display(newStore, getElement(".phones-container"), true);
      if (newStore.length < 1) {
        const productCon = getElement(".phones-container");
        productCon.innerHTML = `<h3 class="filter-error"> sorry no products match you search</h3>`;
      }
    } else {
      display(store, getElement(".phones-container"), true);
    }
  });
};
export { setUpSearch };
