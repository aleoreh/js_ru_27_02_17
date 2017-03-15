import {SELECT_ARTICLE, DAY_CLICK, DELETE_ARTICLE} from "../constants.js";
import { DateUtils } from 'react-day-picker'

const initState = {
    selected: [],
    dateRange: {from: null, to: null}
};

export default (state = initState, action) => {
    const { type, payload } = action;
    var res;

    switch (type) {
        case SELECT_ARTICLE:
            const selected = payload.selected;
            //а здесь лучше просто id хранить, а не все что в Select приходит
            return {...state, selected: selected};
        case DAY_CLICK:
            const dateRange = DateUtils.addDayToRange(payload, state.dateRange);
            return {...state, dateRange: dateRange};
        case DELETE_ARTICLE:
            return {
                ...state,
                selected: state.selected.filter(
                    (article) => article.value !== payload.id
                )
            };
        default:
            return state;
    }
}
