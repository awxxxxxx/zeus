<template>
	<section>
		<h5 class="doc-title">with checkbox</h5>
		<z-table></z-table>
	</section>
	<section>
		<h5 class="doc-title">without checkbox</h5>
		<z-table :table-options="options"></z-table>
	</section>

</template>

<script>
	import zcode from '../utils/zcode.vue';

	export default {
		components: {
			zcode
		},
		data () {
			return {
				options: {
					checkbox: false
				}
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Tables');
		}
	}
</script>