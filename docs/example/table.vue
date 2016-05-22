<template>
	<section>
		<h5 class="doc-title">with checkbox</h5>
		<z-table></z-table>
	</section>
	<section>
		<h5 class="doc-title">without checkbox</h5>
		<z-table :table-options="options"></z-table>
		<z-code lang="html">{{ tableCode }}</z-code>
	</section>

</template>

<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		data () {
			return {
				options: {
					checkbox: false
				},
				tableCode: `<template>
				<z-table :table-options="options"></z-table>
			</template>
			<script>
				export default {
					data () {
						return {
							options: {
								checkbox: false
							}
						}
					}
				}
			<\/script>`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Tables');
		}
	}
</script>