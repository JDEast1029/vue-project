<template>
	<ul class="button-list">
		<li :key="index" v-for="(item, index) in items">
			<Item :link="item.link" :name="item.name" />
		</li>
	</ul>
</template>

<script>
	import Item from '@/components/Home/Item';

	export default {
		name: 'Home',
		data() {
			return {
				items: [
					{
						link: '/hello',
						name: 'HelloWorld'
					},
					{
						link: '/stepper',
						name: '计数器'
					}
				]
			};
		},
		components: {
			'Item': Item
		}
	};
</script>

<style lang="scss" scoped>
	.button-list {
		list-style: none;
		li {
			background-color: #ffffff;
			display: flex;
		}
	}
</style>
