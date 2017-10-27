<template>
	<div class="container">
		<input type="text" placeholder="请输入姓名" v-model="name" />
		<input type="password" placeholder="请输入密码" v-model="password" />
		<button v-on:click="login" >提交</button>
	</div>
</template>

<script>
	import * as types from '@/store/mutations';

	export default {
		name: 'Login',
		data() {
			return {
				name: '',
				password: ''
			};
		},
		methods: {
			login: function() {
				this.ATFetcher(this.$store.commit, {
					type: types.LOGIN_GET,
					method: 'get',
					params: {
						name: this.name,
						password: this.password
					},
					onSuccess: () => {
						this.$router.push('/home');
					},
					onFailed: () => {}
				});
			}
		}
	};
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		width: 300px
	}
</style>

