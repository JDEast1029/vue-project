import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increate(state) {
			state.count += 1;
		},
		decrease(state) {
			state.count -= 1;
		}
	}
});

export default store;
