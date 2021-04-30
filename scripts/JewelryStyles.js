import { getStyles } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {});

export const JewelryStyles = () => {
let html = ""
  // Use .map() for converting objects to <li> elements
  const listItemsArray = styles.map((style) => {
    return `<div>
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </div>`;
  });
  // Join all of the strings in the array into a single string

  html += listItemsArray.join(" ") ;
  return html;
};
