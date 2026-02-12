import {
  getStorageItem,
  getElement,
  formatPrice,
  setStorageItem,
} from "../utilit.js";
import { findProduct } from "../store.js";
import { addToCartDOM } from "../cart/addToCartDom.js";

const cartItemCountDom = [...document.querySelectorAll(".cart-item-count")];
const cartItemDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");

let cart = getStorageItem("cart");

const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemDom.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((eachItem) => (eachItem.dataset.id = id));
    newAmount.textContent = amount;
  }

  // add one to the item count
  displayCartItemCount();
  // display cart total
  displayCartTotal();
  // set cart in local storage
  setStorageItem("cart", cart);
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDom.forEach((count) => {
    count.textContent = amount;
  });
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDom.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemCountDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id != id);
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if ((cartItem.id = id)) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if ((cartItem.id = id)) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setUpCartFunctionality() {
  cartItemDom.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = parseInt(e.target.dataset.id);
    const parentID = e.target.parentElement.dataset.id;
    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      parent.parentElement.remove();
    }

    // increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }

    // decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

const initiate = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemCountDOM();
  // setup cart functionality
  setUpCartFunctionality();
};
initiate();

export { addToCart };
