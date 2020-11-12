let rerender = () => {};

const state = {
    messeges: [['dsf'] ,[]]

}

export let setTextUser = (textUser) => {
    state.messeges[1].push(textUser);
    state.messeges[0].push('');
    console.log(state.messeges);
    rerender();
}

export let setTextAdmin = (textAdmin) => {
    state.messeges[0].push(textAdmin);
    state.messeges[1].push('');
    rerender();
}

export const subscribe = (observer) => {
    rerender = observer;
}

export default state;