import { allMobileUrl } from "../src/utilit.js";

const fetchProduct = async () => {
  try {
    const response = await fetch(allMobileUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.products; // ✅ return array
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
};

export { fetchProduct };
