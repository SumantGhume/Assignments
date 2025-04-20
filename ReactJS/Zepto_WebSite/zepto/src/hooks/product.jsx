import React, { createContext, useReducer } from "react";

// Initial State
const initialState = [];

// Reducer Function
const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

// Create Context
export const ProductContext = createContext();

// Provider Component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <section className="container my-5 p-4 border rounded bg-light">
        <h2 className="mb-3">Zepto Product Manager</h2>
        <p className="text-muted">
          This section helps you manage products in the Zepto app – Add, Edit, or Remove products.
        </p>
        {children}
      </section>
    </ProductContext.Provider>
  );
};
