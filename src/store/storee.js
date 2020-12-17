import Vue from 'vue';
import Vuex from 'vuex';
import {list, listModule} from "./list/list";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        [listModule]: list
    }
})
