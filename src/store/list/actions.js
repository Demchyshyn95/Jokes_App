import {GET_JOKES, SET_JOKES} from "./types";
import axios from "axios";

export const actions = {
    [GET_JOKES]: async ({ commit },) => {
        try {
            const {data: { value }} = await axios.get('http://api.icndb.com/jokes/random/1000');

            commit(SET_JOKES, value);
        } catch (e) {
            console.log(e);
        }
    }

}
