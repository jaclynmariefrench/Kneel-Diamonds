import { getCustomize, getMetals, getOrders, getSizes, getStyles } from "./database.js";

const buildOrderListItem = (order) => {
  const metals = getMetals();
  const sizes = getSizes();
  const styles = getStyles();
  const customize = getCustomize();

  
  // DO THE FIND METHOD FOR SIZES AND STYLES
  const foundMetal = metals.find((metal) => metal.id === order.metalId);
  const foundSizes = sizes.find((size) => size.id === order.sizeId);
  const foundStyles = styles.find((style) => style.id === order.styleId);
  const foundCustomize = customize.find((custom)=> custom.id === order.customizeId)

  // ADD SIZES AND STYLES
  const totalCost = (foundMetal.price + foundSizes.price + foundStyles.price) * foundCustomize.priceIncrease;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
        Order #${order.id} costs ${costString}
    </li>`;
};
export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
  const orders = getOrders();
  let html = "<ul>";
  const listItems = orders.map(buildOrderListItem);
  html += listItems.join("");
  html += "</ul>";
  return html;
};
