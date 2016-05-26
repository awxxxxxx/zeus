<template>
	<section>
		<h3 class="doc-title">Table</h3>
		<z-table :fields="fields" :grid-data="gridData"></z-table>
		<z-code lang="html">{{ tableCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">Props</h3>
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
				options: {
					checkbox: false
				},
				fields: [
					{ title: '商品名', field: 'name' },
					{ title: '价格', field: 'price' },
					{ title: '销量', field: 'sale' },
					{ title: '库存', field: 'stock' },
				],
				gridData: [
					{name: '毛巾', price: '12', sale: 120, stock: 300},
					{name: '浴巾', price: '20', sale: 140, stock: 400},
					{name: '餐巾', price: '10', sale: 220, stock: 330}
				],
				tableCode: `<template>
				<z-table :fields="fields" :grid-data="gridData"></z-table>
			</template>
			<script>
				export default {
					data () {
						return {
							fields: [
								{ title: '商品名', field: 'name' },
								{ title: '价格', field: 'price' },
								{ title: '销量', field: 'sale' },
								{ title: '库存', field: 'stock' },
							],
							gridData: [
								{ name: '毛巾', price: '12', sale: 120, stock: 300 },
								{ name: '浴巾', price: '20', sale: 140, stock: 400 },
								{ name: '餐巾', price: '10', sale: 220, stock: 330 }
							]
						}
					}
				}
			<\/script>`,
				propsCode: `
				{
					fields: [{ title: '表头标题', field: '标题对应的字段'}],
					gridData: 'Array', // 展示的数据
				}
				`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Tables');
		}
	}
</script>