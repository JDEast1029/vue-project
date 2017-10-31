<template>
	<svg :class="classes" aria-hidden="true">
		<use :xlink:href='iconName'/>
	</svg>
</template>

<script>
	export default {
		props: {
			icon: String,
			className: {
				type: String,
				default: ''
			}
		},
		data() {
			console.log(this.className);
			return {
				classes: 'icon ' + this.className
			};
		},
		computed: {
			iconName: function() {
				return '#' + this.icon;
			}
		}
	};
</script>

<style>
	.icon {
		width: 200px;
		height: 200px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
