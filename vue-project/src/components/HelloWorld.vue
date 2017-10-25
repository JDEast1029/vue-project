<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p v-on:click="count += 1">{{count}}</p>
		<simple-counter :my-message="count"/>
		<simple-counter/>
		<simple-counter/>
	</div>
</template>

<script>
	import SimpleCounter from './SimpleCounter';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				count: 0
			};
		},
		components: {
			'simple-counter': SimpleCounter
		},
		beforeCreate: function() {
			console.log('hello beforeCreate');
		},
		created: function() {
			console.log('hello created');
		},
		beforeMount: function() {
			console.log('hello beforeMount');
		},
		mounted: function() {
			console.log('hello mounted');
		},
		beforeDestroy: function() {
			console.log('hello beforeDestroy');
		},
		destroyed: function() {
			console.log('hello destroyed');
		},
		beforeUpdate: function() {
			console.log('hello beforeUpdate');
		},
		updated: function() {
			console.log('hello updated');
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
