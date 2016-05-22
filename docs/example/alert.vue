<template>
	<section>
		<h3 class="doc-title">Alert</h3>
		<button type="button" class="mdl-button mdl-button--raised" @click="show('toast')">Show Toast</button>
		<z-alert :show-alert.sync="toast"></z-alert>
		<z-code lang="html">{{ toastCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">snackbar</h3>
		<button type="button" class="mdl-button mdl-button--raised" @click="show('snackbar')">Show Snackbar</button>
		<z-alert :show-alert.sync="snackbar" :option="barOption"></z-alert>
		<z-code lang="html">{{ snackbarCode }}</z-code>
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
				toast: false,
				snackbar: false,
				barOption: {
					message: 'Loading Completed!',
  				actionHandler: function(event) {alert('Confirm')},
  				actionText: 'Confirm',
  				timeout: 2000
				},
				toastCode: `
			<template>
				<z-button @click="show">Show Toast<z-button>
				<z-alert :show-alert.sync="toast" :option="barOption"></z-alert>
			<template>
			<script>
				export default {
					data () {
						toast: false,
						barOption: {
							messge: 'Loading completed!'
						}
					},
					methods: {
						show () {
							this.toast = true;
						}
					}
				}
			<\/script>`,
				snackbarCode: `
			<template>
				<z-button @click="show">Show Toast<z-button>
				<z-alert :show-alert.sync="snackbar" :option="barOption"></z-alert>
			<template>
			<script>
				export default {
					data () {
						toast: false,
						barOption: {
							messge: 'Loading completed!',
							actionHandler: function(event) {alert('Confirm')},
							actionText: 'Confirm',
							timeout: 2000
						}
					},
					methods: {
						show () {
							this.snackbar = true;
						}
					}
				}
			<\/script>
			`,
			propsCode: `
			{
				showAlert: Boolean, // required, two-way,
				option: {
					message: String, // 提示信息,
					actionHandler: Function, // 响应回调函数
					timeout: Integer, // 提示框展示时长，默认（2750）
					actionText: String, // 响应提示文字
				}
			}`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Alert');
		},
		methods: {
			show (type) {
				switch(type) {
					case 'toast': this.toast = true; break;
					case 'snackbar': this.snackbar = true; break;
				}
			}
		}
	}
</script>