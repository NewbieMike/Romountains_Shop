/* selectors */
export const getCartItems = ({cart}) => cart.items;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const CLEAN_CART_ITEMS = createActionName('CLEAN_CART_ITEMS');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeItem = (id, size) => ({ payload: {id, size}, type: REMOVE_ITEM });
export const cleanCartItems = payload => ({ payload, type: CLEAN_CART_ITEMS });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        items: [...statePart.items, action.payload],
      };
    }
    case REMOVE_ITEM: {
      const newArray = [...statePart.items];
      const itemToRemove = newArray.filter(item => item.id === action.payload.id && item.size === action.payload.size)[0];
      const index = newArray.indexOf(itemToRemove);
      newArray.splice(index, 1);
      return {
        ...statePart,
        items: newArray,
      };
    }
    case CLEAN_CART_ITEMS: {
      return {
        ...statePart,
        items: [],
      };
    }
    default:
      return statePart;
  }
};