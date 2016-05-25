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
						<z-button :accent="true" :raised="true" v-link="{path: grid.path}">go</z-button>
					</td>
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
					{title: '平台名称', field: 'name', type: 'text'},
					{title: '路径', field: 'path', type: 'text'}
				],
				gridData: [],
				formData: {},
				resourceUrl: 'zeus/access'
			}
		},
		ready () {
			this.$dispatch('changeTitle', '我的平台');
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
					this.gridData.push(res.data.data);
				});
			},
			edit (grid, index) {
				const temp = JSON.parse(JSON.stringify(grid));
				this.formData = JSON.parse(JSON.stringify(grid));
				this.$refs.dialog.show().then(() => {
					return this.$http.put(this.resourceUrl + '/' + grid._id, this.formData);
				}, () => {
					console.log('cancel')
				})
				.then((res) => {
					for (let i in this.formData) {
						grid[i] = this.formData[i];
					}
				})
			}
		}
	}
</script>