import Vue from 'vue';
import Router from 'vue-router';
//懒加载
const HelloWorld = () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld');
const Home = () => import(/* webpackChunkName: "home" */ '@/containers/Home/App');
const Stepper = () => import(/* webpackChunkName: "stepper" */ '@/containers/Stepper/App');

Vue.use(Router);

export default new Router({
	mode: 'history',                    //HTML5 history模式
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/hello',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/stepper',
			name: 'Stepper',
			component: Stepper
		}
	]
});
