import { productSideBar } from "./selectors";

export const manageInventoryBtnHandler = () => {
  productSideBar.classList.remove("translate-x-full");
  productSideBar.classList.add("duration-300");
};

export const closeSideBarBtnHandler = () => {
  productSideBar.classList.add("translate-x-full")
};

export const checkOutBtnHandler = () => {
  console.log("u click checkout");
  window.print();
}
