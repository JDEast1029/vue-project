<template>
	<div>
		<input v-model.number="number" type="number" step="20">
		<p>{{ animatedNumber }}</p>
		<div class="number-container">
			<span class="count top">{{count}}</span>
			<span class="count">{{count + 1 >= 10 ? 0 : count + 1}}</span>
		</div>
		<button @click="add">add</button>
	</div>
</template>

<script>
	import TWEEN from '@tweenjs/tween.js';

	export default {
		name: 'Animate',
		data() {
			return {
				number: 0,
				animatedNumber: 0,
				count: 0
			};
		},
		methods: {
			add() {
				if (this.count + 1 >= 10) {
					this.count = 0;
				} else {
					this.count += 1;
				}
				return this.count;
			}
		},
		watch: {
			number: function(newValue, oldValue) {
				var vm = this;
				let value = {tweeningNumber: oldValue};

				function animate() {
					if (TWEEN.update()) {
						requestAnimationFrame(animate);
					}
				}

				new TWEEN.Tween(value)
				.easing(TWEEN.Easing.Quadratic.Out)
				.to({
					tweeningNumber: newValue
				}, 500)
				.onUpdate(function() {
					vm.animatedNumber = value.tweeningNumber.toFixed(0);
				})
				.start();

				animate();
			}
		}
	};
</script>

<style lang="scss">
	.number-container {
		background-color: rgba(0, 26, 69, 0.8);
		height: 50px;
		width: 50px;
		color: #ffffff;
		text-align: center;
		font-size: 30px;
		overflow-y: hidden;
		.count {
			display: block;
			height: 50px;
			width: 50px;
			justify-content: center;
			align-items: center;
		}
		.top {
			margin-top: -50px;
		}
	}
</style>

