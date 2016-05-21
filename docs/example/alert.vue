<template>
	<section>
		<h3 class="doc-title">Alert</h3>
		<button type="button" class="mdl-button mdl-button--raised" @click="show('toast')">Show Toast</button>
		<z-alert :show-alert.sync="toast" :option="barOption"></z-alert>
		<z-code lang="html">{{ toastCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">All props</h3>
		<z-code lang="html">{{ propsCode }}</z-code>
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
				barOption: {
					message: "Loading completed!"
				},
				toastCode: `<template>
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
			<script>`,
			propsCode: `{
				showAlert: Boolean, // required, two-way,
				option: {
					message: String, // the alert message
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
					case 'toast': this.snackbar = true; break;
				}
			}
		}
	}
</script>