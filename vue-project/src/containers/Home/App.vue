<template>
	<ul class="button-list">
		<li :key="index" v-for="(item, index) in items">
			<Item :link="item.link" :name="item.name" />
			<p>{{count}}</p>
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
					},
					{
						link: '/animate',
						name: '动画'
					}
				]
			};
		},
		computed: {
			count: function() {
				return this.$store.state.count;
			}
		},
		created: function() {
			this.ATFetcher(this.$store.commit, {
				method: 'get',
				onFailed: (err) => {
					setTimeout(() => {
						this.$store.commit('decrease');
					}, 3000);
				}
			});
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
