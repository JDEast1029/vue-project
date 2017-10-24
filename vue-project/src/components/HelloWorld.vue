<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p v-on:click="count += 1">{{count}}</p>
	</div>
</template>

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
			console.log('hello updated');
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
