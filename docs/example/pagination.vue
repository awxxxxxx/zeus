<template>
	<section>
		<h3 class="doc-title">Default</h3>
		<z-pagination :total="100" :change-page="change"></z-pagination>
		<z-code lang="html">{{ defaultCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">All props</h3>
		<z-code lang="javascript">{{ propsCode }}</z-code>
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
				defaultCode: `<template>
				<z-pagination :total="100" :change-page="change"></z-pagination>
			</template>
			<script>
				export default {
					methods: {
						change (page) {
							alert('Current page: ' + page);
						}
					}
				}
			<\/script>`,
				propsCode: `{
				total: Number,	// required
				pageSize: Number, // default 10
				changePage: Function, // callback function
			}`
			}
		},
		methods: {
			change (page) {
				alert('Current page: ' +  page);
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Pagination');
		}
	}
</script>