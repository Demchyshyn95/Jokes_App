import {FIND_JOKE, JOKE_BY_ID, JOKES} from "./types";
import _ from 'lodash'

export const getters = {
    [JOKES]: (state) => () => {
        return state.jokes;
    },

    [JOKE_BY_ID]: ({ jokes }) => (id) => {
        const findJoke = jokes.find(joke => joke.id == id);

        return findJoke;
    },

    [FIND_JOKE]: ({ jokes }) => (findJoke) => {

      const filter =  jokes.filter(el => el.joke.toLowerCase().includes(findJoke.toLowerCase()));

      const allJokes = _.chunk(filter,10);
      const pageCount = _.size(allJokes);

      return { allJokes,pageCount };
    }
}
