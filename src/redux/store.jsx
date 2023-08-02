import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer/index";

const store = createStore(rootReducers);

export default store;
