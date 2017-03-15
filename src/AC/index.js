import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, DAY_CLICK} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(payload) {
    return {
        type: SELECT_ARTICLE,
        payload: {selected: payload}
    };
}

export function dayClick(payload) {
    return {
        type: DAY_CLICK,
        payload: payload
    };
}
