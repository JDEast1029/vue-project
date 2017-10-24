<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
		<p v-on:click="count += 1">{{count}}</p>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {count: 0};
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
		}
	};
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
