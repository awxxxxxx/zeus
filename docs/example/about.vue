<template>
	<h1 class="doc-title">About zeus</h1>
</template>

<script>
	export default {
		ready () {
			this.$dispatch('changeComponent', 'About');
		}
	}
</script>