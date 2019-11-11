import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        //用户
        USER(state, user) {
            window.localStorage.setItem('user', JSON.stringify(user))
            state.user = user
        }
    }
})
