<style lang="less">
	.admin {
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
	<div class="admin">
		<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
		  <thead>
		    <tr>
		      <th class="" v-for="field in fields">{{ field.title }}</th>
		      <th>OPTIONS</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="grid in gridData">
		      <td class="" v-for="field in fields">{{grid[field.field]}}</td>
					<td>test</td>
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
					{title: '姓名', field: 'name'},
					{title: '性别', field: 'sex'},
					{title: '权限等级', field: 'level'},
				],
				gridData: [
					{name: 'Arch', sex: '男', level: 3},
					{name: 'Mike', sex: '男', level: 4},
					{name: 'Rose', sex: '女', level: 5}
				]
			}
		},
		ready () {
			this.$dispatch('changeTitle', '人员管理');
			componentHandler.upgradeElement(this.$el);
		}
	}
</script>