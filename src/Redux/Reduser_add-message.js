const addtextUser = 'ADD-textUser';
const addtextAdmin = 'ADD-textAdmin';

let startState = { messages: [['Здравствуйте'], []] };
const addMessagesReduser = (state = startState, action) => {
    switch (action.type) {
        case addtextUser:
            state.messages[1].push(action.text);
            state.messages[0].push('');
            return state;

        case addtextAdmin:
            state.messages[0].push(action.text);
            state.messages[1].push('');
            return state;

        default:
            return state;
    }
}
export const actionCreatortextUser = (text) => ({ type: addtextUser, text: text });
export const actionCreatortextAdmin = (text) => ({ type: addtextAdmin, text: text });
export default addMessagesReduser;