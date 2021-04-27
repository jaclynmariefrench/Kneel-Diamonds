import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            return style.style
        }
    )
    for (const style of styles) {
        html += `<li id="style--">${style.style}</li>`
    }


    // Join all of the strings in the array into a single string
    html += styles.join("")

    html += "</ul>"
    return html
}

