//路由错误页面
<template>
	<div>
		<svg-icon icon="icon-not-exist" />
	</div>
</template>

<script>
	import SvgIcon from '../SvgIcon/SvgIcon';

	export default {
		name: 'NotFound',
		components: {
			SvgIcon
		}
	};
</script>

<style>

</style>
