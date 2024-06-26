import { productRender } from "./inventory";
import { productSideBar } from "./selectors";
import { products } from "./states";

const initialRender = () => {
  // show product side bar
  // productSideBar.classList.remove("translate-x-full");
  productRender(products);
};

export default initialRender;
