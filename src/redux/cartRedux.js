/* selectors */
export const getCartItems = ({cart}) => cart.items;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const UPDATE_ITEM_QNTY = createActionName('UPDATE_ITEM_QNTY');
const UPDATE_ITEM_NOTE = createActionName('UPDATE_ITEM_NOTE');
const CLEAN_CART_ITEMS = createActionName('CLEAN_CART_ITEMS');

/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeItem = (id, size) => ({ payload: {id, size}, type: REMOVE_ITEM });
export const updateItemQnty = (id, qnty) => ({ payload: {id, qnty}, type: UPDATE_ITEM_QNTY });
export const updateItemNote = (id, note) => ({ payload: {id, note}, type: UPDATE_ITEM_NOTE });
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
    case UPDATE_ITEM_QNTY: {
      return {
        ...statePart,
        items: statePart.items.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: +action.payload.qnty}
            : item
        ),
      };
    }
    case UPDATE_ITEM_NOTE: {
      return {
        ...statePart,
        items: statePart.items.map(item =>
          item.id === action.payload.id
            ? {...item, note: action.payload.note}
            : item
        ),
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