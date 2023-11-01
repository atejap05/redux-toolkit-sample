/* 

//* Any Reducer
STORE (for the state)  <--->  ACTION <---> REDUCER FUNTION

// Redux Toolkit -->
     createSlice() -->
     createReducer() -->
     createAsyncThunk() -->
     createEntityAdapter()

Global State management 

Step by Step:

1. Create a store folder
    1.1 Create a store.js file
    1.2 Configure the store using configureStore() from redux toolkit
    1.2 Add the reducer to the store
2. Wrap the App component with the Provider component from react-redux
    2.1 Pass the store to the Provider component
3. Create a feature folder
    3.1 Create a slice using createSlice() from redux toolkit
    3.2 Add the slice actions to the store
4. Create a component that will dispatch an action
    4.1 Import the action from the slice
    4.2 Dispatch the action to the store
    
5. Subscribe to the store to get the state
6. Unsubscribe to the store 

Example:




*/
//
