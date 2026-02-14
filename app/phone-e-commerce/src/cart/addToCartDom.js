import { formatPrice, getElement } from "../utilit.js";

const cartItemDOM = getElement(".cart-items");

const addToCartDOM = ({ id, model, price, amount }) => {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
  article.innerHTML = `<img
              src="./images/bg/${model.replaceAll(" ", "-")}.png"
              class="cart-item-img"
              alt="${model}"
            />

            <div>
              <h4 class="cart-item-name">${model}</h4>
              <p class="cart-item-price">${formatPrice(price)}</p>
              <button class="cart-item-remove-btn" data-id="${parseInt(id)}">remove</button>
            </div>
            <div>
              <button class="cart-item-increase-btn" data-id="${parseInt(id)}">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease-btn" data-id="${parseInt(id)}">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>`;

  cartItemDOM.appendChild(article);
};

export { addToCartDOM };
