import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		isLogin: false
	},
	mutations: {
		increate(state) {
			state.count += 1;
		},
		decrease(state) {
			state.count -= 1;
		},
		[types.LOGIN_GET](state) {
			state.isLogin = true;
		}
	}
});

export default store;
