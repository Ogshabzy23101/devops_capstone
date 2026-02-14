// global import
import "../cart/setupCart.js";

// filter import
import { setUpBrands } from "../filters/brand.js";
import { setupPrice } from "../filters/price.js";
import { setUpSearch } from "../filters/search.js";

// specific import
import { store, setUpStore } from "../store.js";
import { display } from "../displayProduct.js";
import { getElement } from "../utilit.js";
import { fetchProduct } from "../fetchProduct.js";

const initiate = async () => {
  if (store.length < 1) {
    const product = await fetchProduct();
    setUpStore(product);
  }

  display(store, getElement(".phones-container"));
  setUpSearch(store);
  setUpBrands(store);
  setupPrice(store);
};

initiate();
