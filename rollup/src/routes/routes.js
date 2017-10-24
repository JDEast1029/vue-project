import VueRouter from 'vue-router';

const Foo = {
	template: '<div>User {{ $route.params.id }} <router-view></router-view></div>'
};
const Bar = {
	template: '<div>bar</div>'
};
const Profile = {
	template: '<div>profile</div>'
};

const routes = [
	{
		path: '/foo/:id',
		component: Foo,
		children: [{
			// 当 /user/:id/profile 匹配成功，
			// UserProfile 会被渲染在 User 的 <router-view> 中
			path: 'profile',
			component: Profile
		}]
	},
	{
		path: '/bar',
		component: Bar
	}
];

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
});

export default router;
