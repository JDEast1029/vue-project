// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import App from './App';
import router from './router/routes';
import store from '@/store/store';
import '@/utils/vue.config';
import fetchMixin from '@/utils/net/fetcher';

/* 全局混合fetcher请求对象 */
Vue.mixin(fetchMixin);
//引入iView库
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	template: '<App/>',
	components: {
		App
	}
});
