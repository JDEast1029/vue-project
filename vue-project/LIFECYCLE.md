# Vue 生命周期详解
Vue的生命周期分为：
+ beforeCreate()
+ created()
+ beforeMount()
+ mounted()
+ beforeDestroy()
+ destroyed()
+ beforeUpdate()

新建两个文件App.vue和Hello.vue
```vue
//App.vue部分代码
<div id="app">
	<p v-on:click="count += 1">{{count}}</p>
</div>
<script>
	export default {
		name: 'app',
		data() {
			return {
				count: 0
			};
		},
		beforeCreate: () => {
			console.log('beforeCreate');
		},
		created: () => {
			console.log('created');
		},
		beforeMount: () => {
			console.log('beforeMount');
		},
		mounted: () => {
			console.log('mounted');
		},
		beforeDestroy: () => {
			console.log('beforeDestroy');
		},
		destroyed: () => {
			console.log('destroyed');
		},
		beforeUpdate: () => {
			console.log('beforeUpdate');
		},
		updated: () => {
			console.log('updated');
		},
	};
</script>
```
```text
//Hello.vue部分代码
<div class="hello">
	<h1>{{ msg }}</h1>
	<p v-on:click="count += 1">{{count}}</p>
</div>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				count: 0
			};
		},
		beforeCreate: () => {
			console.log('hello beforeCreate');
		},
		created: () => {
			console.log('hello created');
		},
		beforeMount: () => {
			console.log('hello beforeMount');
		},
		mounted: () => {
			console.log('hello mounted');
		},
		beforeDestroy: () => {
			console.log('hello beforeDestroy');
		},
		destroyed: () => {
			console.log('hello destroyed');
		},
		beforeUpdate: () => {
			console.log('hello beforeUpdate');
		},
		updated: () => {
			console.log('updated');
		},
	};
</script>
```
### 初始化
在父组件执行完beforeMount后子组件开始调用生命周期，且父组件在子组件挂载好后才挂载完成。
控制台输出结果：
```text
beforeCreate
created
beforeMount
hello beforeCreate
hello created
hello beforeMount
hello mounted
mounted
```
### 组件更新
分别点击App和Hello中count，如果更新的内容互不影响，组件只执行其各自的生命周期
控制台输出：
```text
hello beforeUpdate
hello updated
和
beforeUpdate
updated
```

### 组件卸载
切换路由后，Hello组件会被卸载；回退后，重新初始化组件
```text
beforeUpdate
hello beforeDestroy
hello destroyed
updated
beforeUpdate
hello beforeCreate
hello created
hello beforeMount
hello mounted
updated
```

![Alt text](./screenshots/lifecycle.png "lifecycle")

