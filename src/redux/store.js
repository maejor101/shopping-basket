// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
// import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // composeWithDevTools(applyMiddleware(thunk))
});

export default store;