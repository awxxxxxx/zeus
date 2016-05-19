<template>
	<h1>hahha</h1>
	<z-datepicker></z-datepicker>
</template>

<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		ready () {
			this.$dispatch('changeComponents', 'Datepicker');
		}
	}
</script>