import { getMetals, getOrderBuilder, setMetal } from "./database.js";

const metals = getMetals();


document.addEventListener("change", (event) => {
  if (event.target.name === "metal") {
    setMetal(parseInt(event.target.value));
      document.dispatchEvent(new CustomEvent("stateChanged"))
  }
  })
export const Metals = () => {
  let html = "<ul>";
  
  // PUT ORDER FUNCTION HERE
  const addOrder = getOrderBuilder();
  // MAP FUNCTION HERE
  const listItemsArray = metals.map((metal)=> {
    // IF ELSE HERE
    if (metal.id === addOrder.metalId) {
      return `<div>
                  <input type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
              </div>`;
    } else {
      return `<div>
                <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
      </div>`
    }
  })

  html += listItemsArray.join(" ")
  html += "</ul>"
  return html
};
