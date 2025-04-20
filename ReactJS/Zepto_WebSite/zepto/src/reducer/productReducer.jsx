export const productReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [...state, action.payload];
      case 'EDIT_PRODUCT':
        return state.map(product =>
          product.id === action.payload.id ? action.payload : product
        );
      case 'DELETE_PRODUCT':
        return state.filter(product => product.id !== action.payload);
      case 'TOGGLE_AVAILABLE':
        return state.map(product =>
          product.id === action.payload
            ? { ...product, available: !product.available }
            : product
        );
      default:
        return state;
    }
  };
  