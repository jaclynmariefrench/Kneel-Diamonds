import { getCustomize, setCustomize } from "./database.js";

const customize = getCustomize();

// EVENT LISTENER
document.addEventListener(
    "change", 
    (event) => {
    if (event.target.name === "customize") {
      setCustomize(parseInt(event.target.value));
      // document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  });

// MAP METHOD FOR STRING
export const CustomizeOrder = () => {
    let html = "<ul>";
  
    // Use .map() for converting objects to <li> elements
    const listItems = customize.map((custom) => {
      return `<li>
              <input type="radio" name="customize" value="${custom.id}" /> ${custom.type}
          </li>`;
    });
  
    html += listItems.join("");
    html += "</ul>";
  
    return html;
  };
  