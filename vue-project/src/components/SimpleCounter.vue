<template>
	<div>
		<button v-on:click="counter += 1">{{counter}}</button>
		<p>{{normalizedSize}}</p>
	</div>
</template>

<script>
	export default {
		name: 'SimpleCounter',
		props: {
			'myMessage': {
				type: Number,
				default: 100
			}
		},
		data: function() {
			return {
				counter: 0,
				message: this.myMessage
			};
		},
		computed: {
			normalizedSize: function() {
				return this.myMessage + 1;
			}
		}
	};
</script>
