export default store => next => action => {
    const res = next(action);
    console.log("dispatching", action, "next state:", store.getState());
    return res;
}
