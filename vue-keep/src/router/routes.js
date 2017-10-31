/**
 * Created by AT on 2017/10/31.
 */
import Vue from 'vue';
import Router from 'vue-router';
//懒加载
const HelloWorld = () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld');
const NotFound = () => import(/* webpackChunkName: "not-found" */ '@/components/_common/NotFound/NotFound');

Vue.use(Router);

export default new Router({
	mode: 'history',                    //HTML5 history模式
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: HelloWorld
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFound
		}
	]
});
