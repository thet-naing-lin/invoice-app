import { v4 as uuidv4 } from "uuid";
import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { products } from "./states";
import Swal from "sweetalert2";

export const addNewProductBtnHandler = () => {
  if (newProductName.value.trim() && newProductPrice.value.trim()) {
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

    productSelect.append(
      new Option(
        `${newProductName.value} - ${newProductPrice.valueAsNumber} mmk`,
        createId
      )
    );

    products.push({
      id: createId,
      name: newProductName.value,
      price: newProductPrice.valueAsNumber,
    });

    console.log(products);

    newProductName.value = null;
    newProductPrice.value = null;
  } else {
    Swal.fire({
      title: "Can't add new products!",
      text: "You must input first your product name and price!",
      icon: "error",
      confirmButtonColor: "#1d4ed8",
    });
  }
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

  currentProductCard.setAttribute("side-bar-row-id", uuidv4());

  productName.innerText = name;
  productPrice.innerText = price;

  //   console.log(productCard);
  return productCard;
};

export const removeProduct = (productRowId) => {
  Swal.fire({
    title: "Are you sure to remove the product?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#1d4ed8",
  }).then((result) => {
    if (result.isConfirmed) {
      const currentProductRow = productGroup.querySelector(
        `[side-bar-row-id="${productRowId}"]`
      );
      currentProductRow.remove();

      console.log(currentProductRow.id);

      for (let i = 1; i < productSelect.children.length; i++) {
        if (currentProductRow.id === productSelect.children[i].value) {
          const currentProductSelect = productSelect.querySelector(
            `[value="${productSelect.children[i].value}"]`
          );
          currentProductSelect.remove();
        }
      }

      // products = products.filter(
      //   (product) => product.id !== parseInt(currentProductRow.id)
      // );

      // console.log(products);
    }
  });
};

export const productGroupHandler = (event) => {
  // console.log(event.target.classList.contains("product-remove"));
  if (event.target.classList.contains("product-remove")) {
    const currentProductRow = event.target.closest(".product-card");
    // console.log(currentProductRow);
    removeProduct(currentProductRow.getAttribute("side-bar-row-id"));
  }
};
