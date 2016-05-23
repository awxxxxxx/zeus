<template>
	<section>
		<h3 class="doc-title">后台数据接入规范</h3>
		<z-code lang="javascript">{{ apiCode }}</z-code>
	</section>
</template>

<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode,
		},
		data () {
			return {
				apiCode: `
				1. url: 所有接入 zeus 平台的 api 以 /zeus/** 开头，以此区分 zeus 平台和其他平台
				2. query: 分页查询参数格式为 /zeus/**?page=&pageSize=
				3. 返回的数据格式：
					{
						total: Number, // 数据库的数据总数
						data: Array || Object, // 返回的列表数据
					}
				`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'API');
		}
	}
</script>