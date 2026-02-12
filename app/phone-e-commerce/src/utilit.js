// all url

const allMobileUrl = "https://dummyjson.com/products/category/smartphones";

const singleMobileUrl = "https://dummyjson.com/products/";

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Please check "${selector}" selector, no such element exist`);
};

const formatPrice = (price) => {
  let formatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return formatPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(storageItem);
  } else {
    storageItem = [];
  }

  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  getElement,
  getStorageItem,
  setStorageItem,
  formatPrice,
  allMobileUrl,
  singleMobileUrl,
};
