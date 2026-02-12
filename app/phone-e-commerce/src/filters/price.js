import { getElement } from "../utilit.js";
import { display } from "../displayProduct.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = store.map((product) => product.price);

  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `value: $${maxPrice}`;
  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `value: $ ${value}`;
    let newStore = store.filter((product) => product.price <= value);
    display(newStore, getElement(".phones-container"), true);
    if (newStore.length < 1) {
      const productCon = getElement(".phones-container");
      productCon.innerHTML = `<h3 class="filter-error"> sorry no product match your search</h3>`;
    }
  });
};

export { setupPrice };
