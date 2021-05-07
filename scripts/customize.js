import { getCustomize, getOrderBuilder, setCustomize } from "./database.js";

const customize = getCustomize();

// EVENT LISTENER
document.addEventListener(
    "change", 
    (event) => {
    if (event.target.name === "customize") {
      setCustomize(parseInt(event.target.value));
      document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  });

// MAP METHOD FOR STRING
export const CustomizeOrder = () => {
  let html = "<ul>"
  
  // ADD FUNCTION HERE
  const addOrder = getOrderBuilder();
  const listItemsArray = customize.map((custom)=> {
    // IF ELSE HERE
    if (custom.id === addOrder.customizeId) {
      return `<div>
                  <input type="radio" name="customize" value="${custom.id}" checked="checked" /> ${custom.type}
              </div>`;
    } else {
      return `<div>
                <input type="radio" name="customize" value="${custom.id}"/> ${custom.type}
      </div>`
    }
  })

  html += listItemsArray.join(" ")
  html += "</ul>"
  return html
}