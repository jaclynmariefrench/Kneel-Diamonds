import { database } from "./database";


export const getCustomize = () => {
    return [...database.customize];
  }
  
export const getMetals = () => {
    return [...database.metals];
  };
  export const getStyles = () => {
    return [...database.styles];
  };
  export const getSizes = () => {
    return [...database.sizes];
  };
  export const getOrders = () => {
    return [...database.customOrders];
  };
  export const getOrderBuilder = () => {
    return {...database.orderBuilder}
  }
  
  export const setMetal = (id) => {
    database.orderBuilder.metalId = id;
  };
  
  export const setSize = (id) => {
    database.orderBuilder.sizeId = id;
  };
  
  export const setStyle = (id) => {
    database.orderBuilder.styleId = id;
  };
  export const setCustomize = (id) => {
    database.orderBuilder.customizeId = id;
  }
  
  export const addCustomOrder = () => {
    
    // IF ELSE STATEMENT HERE
    if (
          "metalId" in database.orderBuilder &&
          "sizeId" in database.orderBuilder &&
          "styleId" in database.orderBuilder &&
          "customizeId" in database.orderBuilder
    )
    {
      // copy of current state of the order
      const newOrder = { ...database.orderBuilder };
      
      // new primary key to object ADD TERNARY STATMENT HERE
      newOrder.id = (database.customOrders.length > 0 ? [...database.customOrders].pop().id + 1 : 1)
      
      //   adding timestamp
      newOrder.timestamp = Date.now();
      
      // adding new order object to custom order state
      database.customOrders.push(newOrder);
      
      // resetting temporary state for user
      database.orderBuilder = {};
      
      // broadcast a notification that the state has changed
      document.dispatchEvent(new CustomEvent("stateChanged"));
      return true
     }
    return false
  };
