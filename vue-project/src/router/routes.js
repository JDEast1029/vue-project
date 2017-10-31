import Vue from 'vue';
import Router from 'vue-router';
//懒加载
const Layout = () => import(/* webpackChunkName: "layout" */ '@/components/_common/Layout/Layout');
const NotFound = () => import(/* webpackChunkName: "notfound" */ '@/components/_common/NotFound/NotFound');
const HelloWorld = () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld');
const Home = () => import(/* webpackChunkName: "home" */ '@/containers/Home/App');
const Stepper = () => import(/* webpackChunkName: "stepper" */ '@/containers/Stepper/App');
const Login = () => import(/* webpackChunkName: "login" */ '@/containers/Login/App');
const Animate = () => import(/* webpackChunkName: "login" */ '@/containers/Animate/App');

Vue.use(Router);

export default new Router({
	mode: 'history',                    //HTML5 history模式
	routes: [
		// {
		// 	path: '/',
		// 	name: 'Layout',
		// 	component: Layout,
		// 	children: [
		// 		{
		// 			path: '/home',
		// 			name: 'Home',
		// 			component: Home
		// 		},
		// 		{
		// 			path: '/hello',
		// 			name: 'HelloWorld',
		// 			component: HelloWorld
		// 		},
		// 		{
		// 			path: '/stepper',
		// 			name: 'Stepper',
		// 			component: Stepper
		// 		}
		// 	]
		// },
		{
			path: '/home',
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
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/animate',
			name: 'Animate',
			component: Animate
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFound
		}
	]
});
