<template>
	<section>
		<h3 class="doc-title">后台数据接入规范</h3>
		<z-code lang="javascript">{{ apiCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">使用反向代理功能</h3>
		<z-code lang="javascript">{{ proxyCode }}</z-code>
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
				1. url: 所有接入 zeus 平台的 api 以 '/zeus/**'' 开头，以此区分 zeus 平台和其他平台。
				2. query: 分页查询参数格式为 '/zeus/**?page=&limit='，'page' 为当前页数，'limit' 为一页的大小。
				3. 返回的数据格式：
					{
						status: 'Number', // 0 表示操作成功
						total: 'Number', // 数据库的数据总数
						data: 'Array' || 'Object', // 返回的列表数据
						msg: 'String' // 结果信息
					}
				`,
				proxyCode: `
				1. zeus-server 集成了反向代理功能，代理前端发往后端服务器的请求。
				2. 需要反向代理所有请求时，请求的 api 以 '/zeus/' + 后台名字开头，同时配置接入平台，
				接入平台的名称要与后台名字一致，例如 '/zeus/ads'，则配置时接入平台填写 'ads'。
				`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'API');
		}
	}
</script>