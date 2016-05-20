<template>
	<h3 class="doc-title">Under building.</h3>
</template>

<script>
	export default {
		ready () {
			this.$dispatch('changeComponent', 'Upload');
		}
	}
</script>