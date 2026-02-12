// global import
import { getElement } from "./src/utilit.js";
import { fetchProduct } from "./src/fetchProduct.js";
import { setUpStore, store } from "./src/store.js";
import { display } from "./src/displayProduct.js";

const initiate = async () => {
  const products = await fetchProduct();
  setUpStore(products);

  display(store, getElement(".phones-container")); // ✅ uncomment
};

window.addEventListener("DOMContentLoaded", initiate);
