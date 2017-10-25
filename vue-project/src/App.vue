<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		beforeCreate: function() {
			console.log('beforeCreate');
		},
		created: function() {
			console.log('created');
		},
		beforeMount: function() {
			console.log('beforeMount');
		},
		mounted: function() {
			console.log('mounted');
		},
		beforeDestroy: function() {
			console.log('beforeDestroy');
		},
		destroyed: function() {
			console.log('destroyed');
		},
		beforeUpdate: function() {
			console.log('beforeUpdate');
		},
		updated: function() {
			console.log('updated');
		}
	};
</script>

<style lang="scss">
	@import '/styles/reset.scss';

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
