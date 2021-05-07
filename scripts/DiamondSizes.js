import { getOrderBuilder, getSizes, setSize } from "./database.js";

const sizes = getSizes();

document.addEventListener("change", (event) => {
  if (event.target.name === "size") {
    setSize(parseInt(event.target.value));
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
});

export const DiamondSizes = () => {
  let html = "<ul>";

  // PUT FUNCTION HERE
  const addOrder = getOrderBuilder();
  // MAP FUNCTION HERE
  const listItemsArray = sizes.map((size)=> {
    // IF ELSE HERE
    if (size.id === addOrder.sizeId) {
      return `<div>
                  <input type="radio" name="size" value="${size.id}" checked="checked" /> ${size.carets}
              </div>`;
    } else {
      return `<div>
                <input type="radio" name="size" value="${size.id}"/> ${size.carets}
      </div>`
    }
  })

  html += listItemsArray.join(" ")
  html += "</ul>"
  return html
};
