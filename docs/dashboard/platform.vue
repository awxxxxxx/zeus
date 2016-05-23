<style lang="less">
	.platform {
		display: flex;
		justify-content: center;
		> table {
			width: 80%;
			th, td {
				text-align: center;
			}
		}
	}
</style>

<template>
	<div class="platform">
		<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp" id="platform">
		  <thead>
		    <tr>
		      <th class="" v-for="field in fields">{{ field.title }}</th>
		      <th>OPTIONS</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="grid in gridData">
		      <td class="" v-for="field in fields">{{ grid[field.field] }}</td>
					<td><z-button :accent="true" :raised="true">操作</z-button></td>
		    </tr>
		  </tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				fields: [
					{title: '名称', field: 'name'},
					{title: '接口地址', field: 'path'},
					{title: '可访问人数', field: 'count'},
				],
				gridData: [
					{name: 'Arch', path: '/arch', count: 4},
					{name: '广告后台', path: '/ads', count: 4},
					{name: '订单后台', path: '/order', count: 5}
				]
			}
		},
		ready () {
			this.$dispatch('changeTitle', '接入平台管理');
		}
	}
</script>