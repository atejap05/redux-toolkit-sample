import { createSlice } from "@reduxjs/toolkit";

/**
 * This slice defines the Redux state and reducers for the counter feature.
 * @typedef {Object} CounterState - The shape of the counter state.
 * @property {number} count - The current count value.
 * @property {boolean} isLoading - Indicates if the counter is currently being updated.
 * @property {string|null} error - The error message if the counter update fails.
 */

/**
 * The initial state for the counter feature.
 * @type {CounterState}
 */
const initialState = {
  count: 0,
  isLoading: false,
  error: null,
};

/**
 * The Redux slice for the counter feature.
 * @type {import("@reduxjs/toolkit").Slice<CounterState>}
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * Increments the count value by 1.
     * @param {CounterState} state - The current counter state.
     */
    increment: state => {
      state.count += 1;
    },
    /**
     * Decrements the count value by 1.
     * @param {CounterState} state - The current counter state.
     */
    decrement: state => {
      state.count -= 1;
    },

    /**
     * Resets the count value to 0.
     * @param {CounterState} state - The current counter state.
     *
     **/
    reset: state => {
      state.count = 0;
    },

    /**
     * Increments the count value by a specified amount.
     * @param {CounterState} state - The current counter state.
     * @param {import("@reduxjs/toolkit").PayloadAction<number>} action - The action containing the payload with the amount to increment by.
     */
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Export the action creators for the slice reducers defined above.
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the reducer for the slice.
export default counterSlice.reducer;
