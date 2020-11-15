const { createStore, combineReducers } = require("redux");
const { default: addMessagesReduser } = require("./Reduser_add-message");


let redusers = combineReducers({
    getMessages: addMessagesReduser
})
let store = createStore(redusers);


export default store;