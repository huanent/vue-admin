import Vuex from "vuex"
import Vue from 'vue'
import NavTabs from './navTabs'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navTabs: NavTabs
    }
})