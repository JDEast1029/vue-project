<template>
	<transition name="fade">
		<router-link v-if="show" class="item" :to="link">{{name}}</router-link>
	</transition>
</template>

<script>
	export default {
		name: 'Item',
		props: {
			name: String,
			link: String
		},
		data() {
			return {
				showItem: false
			};
		},
		computed: {
			show() {
				return this.showItem;
			}
		},
		mounted: function() {
			setTimeout(() => {
				this.showItem = true;
			}, 1000);
		}
	};
</script>

<style>
	.item {
		text-align: left;
		padding: 10px;
		border-bottom: 1px solid #e4e4e4;
		flex: 1
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}

	.fade-enter,
	.fade-leave-to {
		/* .fade-leave-active in below version 2.1.8 */
		opacity: 0
	}
</style>
