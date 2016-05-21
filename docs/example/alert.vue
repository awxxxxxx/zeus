<template>
	<h3 class="doc-title">Under building...</h3>
</template>

<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		ready () {
			this.$dispatch('changeComponent', 'Alert');
		}
	}
</script>