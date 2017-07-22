import Vuex from 'vuex'

const Home = resolve => require(['../views/Home'], resolve)

const state = {
    activeTabName: "home",
    tabList: [
        {
            label: '主页',
            name: 'home',
            disabled: false,
            closable: false,
            component: Home
        }
    ]
}

const mutations = {
    setActiveTabName(state, name) {
        state.activeTabName = name;
    },
    addTab(state, index) {
        if (state.tabList.filter(f => f.name == index) == 0) {
            let component = resolve => require([`../views/${index}`], resolve)
            state.tabList.push({
                label: index,
                name: index,
                disabled: false,
                closable: true,
                component: component
            })
        }
        state.activeTabName = index;
    },
    closeTab(state, name) {
        let tab = state.tabList.filter(f => f.name == name)[0];
        let index = state.tabList.indexOf(tab);
        if (index != state.tabList.length - 1) {
            state.activeTabName = state.tabList[index + 1].name;
        } else {
            state.activeTabName = state.tabList[index - 1].name;
        }
        state.tabList = state.tabList.filter(f => f.name != name);
    }
}

export default {
    namespaced: true,
    state,
    mutations
}