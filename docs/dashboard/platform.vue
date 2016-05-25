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
		.add {
			flex: 1;
		}

		.group {
			margin: 10px 0;

			> label {
				display: inline-block;
				width: 30%;
			}
			> input {
				width: 60%;
			}
		}
	}
	.mdl-input {
		display: inline-block;
    padding: 6px;
    line-height: 22px;
    font-size: 16px;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
    border-radius: 2px;
    color: rgb(95, 95, 95);
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
						<z-button :accent="true" :raised="true" @click="edit(grid, $index)">编辑</z-button>
						<z-button :accent="true" :raised="true" @click="deleteData(grid, $index)">删除</z-button>
					</td>
		    </tr>
		  </tbody>
		</table>
		<z-button :accent="true" :raised="true" @click="add">增加平台</z-button>
		<z-dialog v-ref:dialog>
			<div v-for="field in fields" class="group">
				<label for="">{{ field.title }}:</label>
				<input type="field.type" class="mdl-input" v-model="formData[field.field]">
			</div>
		</z-dialog>
		<z-dialog v-ref:confirm>
			<p>确定删除？</p>
		</z-dialog>
		<z-alert :show-alert.sync="toast" :option="barOption"></z-alert>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				fields: [
					{title: '名称', field: 'name', type: 'text'},
					{title: '英文名称', field: 'ename', type: 'text'},
					{title: '接口地址', field: 'path', type: 'text'},
				],
				toast: false,
				barOption: {
					message : '操作成功'
				},
				gridData: [],
				formData: {},
				resourceUrl: 'zeus/backends'
			}
		},
		ready () {
			this.$dispatch('changeTitle', '接入平台管理');
			this.$http.get(this.resourceUrl).then((res) => {
				this.gridData = res.data.data;
			});
		},
		methods: {
			add () {
				this.formData = {};
				this.$refs.dialog.show().then(() => {
					return this.$http.post(this.resourceUrl, this.formData);
				}, () => {
					console.log('cancel')
				})
				.then((res) => {
					if (!res.data.status) {
						this.gridData.push(res.data.data);
					} else {
						this.barOption.message = res.data.msg;
					}
					this.toast = true;
				});
			},
			edit (grid, index) {
				const temp = JSON.parse(JSON.stringify(grid));
				this.formData = JSON.parse(JSON.stringify(grid));
				this.$refs.dialog.show().then(() => {
					return this.$http.put(this.resourceUrl + '/'+ grid._id, this.formData);
				}, () => {
					console.log('cancel')
				})
				.then((res) => {
					if (!res.data.status) {
						for (let i in this.formData) {
							grid[i] = this.formData[i];
						}
					} else {
						this.barOption.message = res.data.msg;
					}
					this.toast = true;
				})
			},
			deleteData (grid, index) {
				this.$refs.confirm.show().then(() => {
					return this.$http.delete(this.resourceUrl + '/'+ grid._id, this.formData);
				}, () => {
					console.log('cancel')
				})
				.then((res) => {
					this.gridData.splice(index, 1);
					this.toast = true;
				});
			}
		}
	}
</script>