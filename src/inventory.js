import { v4 as uuidv4 } from "uuid";
import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { products } from "./states";

export const addNewProductBtnHandler = () => {
  const createId = uuidv4();

  // console.log("add new product");
  // console.log(createNewProductCard(newProductName.value, newProductPrice.valueAsNumber));

  productGroup.append(
    createNewProductCard(
      createId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );

  productSelect.append(new Option(`${newProductName.value} - ${newProductPrice.valueAsNumber} mmk`, createId));

  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });

  console.log(products);

  newProductName.value = null;
  newProductPrice.value = null;
};

export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productGroup.append(createNewProductCard(id, name, price));
    productSelect.append(new Option(`${name} - ${price} mmk`, id));
  });
};

export const createNewProductCard = (id, name, price) => {
  const productCard = productCardTemplate.content.cloneNode(true);
  const currentProductCard = productCard.querySelector(".product-card");
  const productName = productCard.querySelector(".product-name");
  const productPrice = productCard.querySelector(".product-price");

  currentProductCard.id = id;

  productName.innerText = name;
  productPrice.innerText = price;

  //   console.log(productCard);
  return productCard;
};
