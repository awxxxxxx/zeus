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
		<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp" id="dash-admin">
		  <thead>
		    <tr>
		      <th class="" v-for="field in fields">{{ field.title }}</th>
		      <th>OPTIONS</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="grid in gridData">
		      <td class="" v-for="field in fields">{{ grid[field.field] }}</td>
					<td>
						<z-button :accent="true" :raised="true" @click="edit">操作</z-button>
						<z-button :accent="true" :raised="true">删除</z-button>
					</td>
		    </tr>
		  </tbody>
		</table>
		<z-dialog v-ref:dialog>
			<p>hahah</p>
		</z-dialog>
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
				gridData: []
			}
		},
		ready () {
			this.$dispatch('changeTitle', '人员管理');
			this.$http.get('zeus/accounts').then((res) => {
				this.gridData = res.data.data;
			});
		},
		methods: {
			edit () {
				this.$refs.dialog.show().then(() => {
					console.log('hahah')
				}, () => {
					console.log('haha')
				})
			}
		}
	}
</script>