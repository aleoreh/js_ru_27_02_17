import { normalizedComments } from '../fixtures';
import { Record, Map } from 'immutable';
import * as I from "seamless-immutable";
import { arrToMap } from './utils';
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE, START, SUCCESS, FAIL } from '../constants';

const initComment = I.from({
    id: null,
    user: '',
    text: '',
    loading: false
});

const initState = I.from({
    entities: I.from({}),
    loading: false,
    error: null
});

export default (state = initState, action) => {
    const { type, payload, randomId } = action;

    switch (type) {
        case ADD_COMMENT:
            return state.entities.set(randomId, I.from({
                id: randomId,
                ...payload.comment
            }));
        case LOAD_COMMENTS_BY_ARTICLE + START:
            return state.set("loading", true);
        case LOAD_COMMENTS_BY_ARTICLE + SUCCESS:
            const res =
                state
                    .set("entities", I.asObject(payload.response, (item) => [item.id, item]))
                    .set("loading", false);
            return res;
        case LOAD_COMMENTS_BY_ARTICLE + FAIL:
            return state
                .set('error', payload.error.statusText)
                .set('loading', false);
        default:
            return state;
    }
}
