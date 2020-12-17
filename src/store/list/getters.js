import {FIND_JOKE, JOKE_BY_ID, JOKES} from "./types";
import _ from 'lodash'

export const getters = {
    [JOKES]: (state) => () => {
        return state.jokes;
    },

    [JOKE_BY_ID]: ({ jokes }) => (id) => {
        try {
            const findJoke = jokes.find(joke => joke.id == id);
            return findJoke;
        } catch (e) {
            console.log(e);
        }
    },

    [FIND_JOKE]: ({jokes}) => (findJoke) => {
        try {
            const filter = jokes.filter(el => el.joke.toLowerCase().includes(findJoke.toLowerCase()));
            const allJokes = _.chunk(filter, 10);
            const pageCount = _.size(allJokes);

            return { allJokes, pageCount };
        } catch (e) {
            console.log(e);
        }
    }
}
