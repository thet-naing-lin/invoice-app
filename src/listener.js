import {
  checkOutBtnHandler,
  closeSideBarBtnHandler,
  manageInventoryBtnHandler,
} from "./handlers";
import { addNewProductBtnHandler, productGroupHandler } from "./inventory";
import { createRecordFormHandler, recordGroupHandler } from "./record";
import {
  addNewProductBtn,
  checkOutBtn,
  closeSideBarBtn,
  createRecordForm,
  manageInventoryBtn,
  productGroup,
  recordGroup,
} from "./selectors";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkOutBtn.addEventListener("click", checkOutBtnHandler);
  productGroup.addEventListener("click", productGroupHandler);
};

export default listener;
