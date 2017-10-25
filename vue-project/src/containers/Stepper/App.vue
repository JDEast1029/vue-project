<template>
	<div class="container">
		<button @click="decrease">-</button>
		<p>{{count}}</p>
		<button @click="increate">+</button>
	</div>
</template>

<script>
	export default {
		name: 'Stepper',
		data() {
			return {
				counter: 0
			};
		},
		//计算属性
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			increate: function() {
				this.$store.commit('increate');
			},
			decrease: function() {
				this.$store.commit('decrease');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		display: flex
	}
</style>

