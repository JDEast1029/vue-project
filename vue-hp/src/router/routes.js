/**
 * Created by AT on 2017/10/31.
 */
import Vue from 'vue';
import Router from 'vue-router';
//懒加载
const HelloWorld = () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld');

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: HelloWorld
		}
	]
});
