const store = {
    _state: { messeges: [['Здравствуйте'], []] },
    getState() {
        return this._state
    },

    rerender() { },
    subscribe(observer) {
        this.rerender = observer;
    },

    setTextUser(textUser) {
        this._state.messeges[1].push(textUser);
        this._state.messeges[0].push('');
        this.rerender();
    },

    setTextAdmin(textAdmin) {
        this._state.messeges[0].push(textAdmin);
        this._state.messeges[1].push('');
        this.rerender();
    }
}
export default store;