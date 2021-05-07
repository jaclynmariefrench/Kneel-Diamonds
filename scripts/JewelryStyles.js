import { getOrderBuilder, getStyles, setStyle } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {
  if (event.target.name === "style") {
    setStyle(parseInt(event.target.value));
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
});

export const JewelryStyles = () => {
  let html = "<ul>"
  
  // ADD FUNCTION HERE
  const addOrder = getOrderBuilder();
  const listItemsArray = styles.map((style)=> {
    // IF ELSE HERE
    if (style.id === addOrder.styleId) {
      return `<div>
                  <input type="radio" name="style" value="${style.id}" checked="checked" /> ${style.style}
              </div>`;
    } else {
      return `<div>
                <input type="radio" name="style" value="${style.id}"/> ${style.style}
      </div>`
    }
  })

  html += listItemsArray.join(" ")
  html += "</ul>"
  return html
}
