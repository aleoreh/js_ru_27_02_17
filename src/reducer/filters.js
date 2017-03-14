// import {SELECT_ARTICLE} from "../constants.js";

const initState = {
    selected: []
};

export default (state = initState, action) => {
    const { type, payload } = action;
    var res;

    switch (type) {
        case "SELECT_ARTICLE":
            const selected = payload.selected;
            return {selected: selected};
        default:
            return state;
    }
}
