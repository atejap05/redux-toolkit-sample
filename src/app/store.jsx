import { configureStore } from "@reduxjs/toolkit";

// Import reducers here and add them to the reducer object below.
// This import statement brings in the counterReducer function from the counterSlice.jsx file.
import counterReducer from "../features/counter/counterSlice.jsx";

// Create the Redux store to hold all the state of the app.
// The configureStore function is called with an object that contains a reducer property.
// The reducer property is an object that contains all the reducers used in the app.
// In this case, the counterReducer function is added to the reducer object with the key "counter".
const store = configureStore({
  reducer: {
    // Add reducers here
    counter: counterReducer,
  },
});

// Export the store object as the default export of this module.
export default store;
