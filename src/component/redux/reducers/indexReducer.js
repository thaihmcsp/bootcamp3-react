const { combineReducers } = require("redux");
const {productReducer}  = require("./productReducer");
const {userReducer}  = require("./userReducer");

const indexReducer = combineReducers({
    user: userReducer,
    product: productReducer
})


export default indexReducer