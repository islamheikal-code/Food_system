const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      let updatedItems = [...state.cartItems];
      
      if (existingItemIndex > -1) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cartItems: updatedItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price
      };
    }
    case 'REMOVE_FROM_CART': {
      const targetItem = state.cartItems.find(item => item.id === action.payload);
      if (!targetItem) return state;

      const updatedItems = state.cartItems.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedItems,
        totalItems: state.totalItems - targetItem.quantity,
        totalPrice: state.totalPrice - (targetItem.price * targetItem.quantity)
      };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};