import "../cart/setupCart.js";
import { addToCart } from "../cart/setupCart.js";
import { singleMobileUrl, getElement, formatPrice } from "../utilit.js";

const descriptionDOM = getElement(".phone-desc-paragraph");
const titleDOM = getElement(".phone-title-head");
const modelDOM = getElement(".phone-title-head2");
const yearDOM = getElement(".phone-title-year");
const priceDOM = getElement(".price");

// These may not exist in DummyJSON; we’ll fill what we can safely
const displayDOM = getElement(".phone-display");
const processorDOM = getElement(".phone-processor");
const batteryDOM = getElement(".phone-ba3");
const ramDOM = getElement(".phone-ram");
const storageDOM = getElement(".phone-storage");
const resolutionDOM = getElement(".phone-resolution");

const colorDOM = getElement(".variant");
const CenterDOM = getElement(".pro-container");
const CartBtn = getElement(".add-cart");
const image = getElement(".photo-main-image");

let productId;

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const urlId = params.get("id");

  if (!urlId) {
    CenterDOM.innerHTML = `
      <div>
        <h3 class="error">Missing product id</h3>
        <a href="phones.html" class="btn">back to phones</a>
      </div>`;
    return;
  }

  try {
    const response = await fetch(`${singleMobileUrl}${urlId}`);

    if (!response.ok) {
      CenterDOM.innerHTML = `
        <div>
          <h3 class="error">sorry, something went wrong</h3>
          <a href="phones.html" class="btn">back to phones</a>
        </div>`;
      return;
    }

    const product = await response.json();

    // DummyJSON fields
    const { id, title, brand, description, price, thumbnail, images, rating } =
      product;

    productId = id;

    // Fill DOM
    descriptionDOM.textContent = description ?? "";
    titleDOM.textContent = brand ?? "";
    modelDOM.textContent = title ?? "";
    yearDOM.textContent = ""; // DummyJSON doesn’t provide release year
    priceDOM.textContent = formatPrice(price ?? 0);

    // Use API image
    image.src = thumbnail || (images && images[0]) || "";
    image.alt = title || "phone";

    displayDOM.innerHTML = `<span>Rating:</span> ${rating ?? "N/A"}`;
    processorDOM.innerHTML = `<span>Brand:</span> ${brand ?? "N/A"}`;

    batteryDOM.innerHTML = `<span>Battery capacity:</span> N/A`;
    ramDOM.innerHTML = `<span>RAM size:</span> N/A`;
    storageDOM.innerHTML = `<span>Storage size:</span> N/A`;
    resolutionDOM.innerHTML = `<span>Resolution:</span> N/A`;

    colorDOM.innerHTML = "";
    const li = document.createElement("li");
    li.classList.add("product-color");
    li.textContent = "N/A";
    colorDOM.appendChild(li);

    CartBtn.setAttribute("data-id", `${productId}`);
  } catch (error) {
    console.error(error);
    CenterDOM.innerHTML = `
      <div>
        <h3 class="error">Network error</h3>
        <a href="phones.html" class="btn-back">back</a>
      </div>`;
  }
});

CartBtn.addEventListener("click", function () {
  addToCart(productId);
});
