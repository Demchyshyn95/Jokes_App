import {SET_JOKES} from "./types";

export const mutations = {
    [SET_JOKES]: (state,newJokes) => {
        state.jokes = newJokes;
    }
}
