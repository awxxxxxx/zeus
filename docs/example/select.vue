<template>
	<section>
		<h3 class="doc-title">select</h3>
		<h4 class="doc-title">selected: {{ selected }}</h4>
		<z-select :selected.sync="selected" :options="options" label="language" id="language"></z-select>
		<z-code lang="html">{{ selectCode }}</z-code>
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
				selected: '',
				options: [
					{label: 'rust', value: 'rust'},
					{label: 'golang', value: 'go'},
					{label: 'erlang', value: 'er'},
					{label: 'javascript', value: 'js'}
				],
				selectCode: `
				<template>
					<z-select :selected.sync="selected" :options="options" label="language" id="language"></z-select>
				</template>
				<script>
					export default {
						data () {
							selected: '',
							options: [
								{label: 'rust', value: 'rust'},
								{label: 'golang', value: 'golang'},
								{label: 'erlang', value: 'erlang'},
								{label: 'javascript', value: 'javascript'}
							]
						}
					}
				<\/script>`,
				propsCode: `
				{
					selected: String || Number, // required,
					options: Array, // 选项列表 Ex: [{label: 'test', value: 'te'}],
					label: String,
					id: String, // required, 用于标识某个 select 组件
				}`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Select');
		}
	}
</script>