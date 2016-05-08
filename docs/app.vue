<style>
	.doc-title {
		font-weight: 300;
    color:#41b883;
	}
</style>
<template>
	<div class="mdl-cell mdl-cell--12-col">
		<router-view></router-view>	
	</div>
</template>
<script>

	export default {
		ready () {
			console.log('app');
		}
	}
</script>