// create store
import counterReducer from './Counter/counterReducer'
import { configureStore } from "redux";
const store = configureStore(counterReducer);

export default store;