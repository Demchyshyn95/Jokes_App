import {actions} from "./actions";
import {state} from "./statee";
import {getters} from "./getters";
import {mutations} from "./mutations";

const namespaced = true;

export const listModule = 'list';

export const list = {
    actions,
    state,
    getters,
    mutations,
    namespaced,
}
