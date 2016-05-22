<template>
	<div class="mdl-js-snackbar mdl-snackbar">
  	<div class="mdl-snackbar__text"></div>
  	<button class="mdl-snackbar__action" type="button"></button>
	</div>
</template>

<script>
	export default {
		props: {
			showAlert: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			option: {
				type: Object,
				default () {
					return {
						message: "I'm a toast."
					}
				}
			}
		},
		data () {
			return {
				timeTick: null
			}
		},
		ready () {
			componentHandler.upgradeElement(this.$el, "MaterialSnackbar");
		},
		watch: {
			showAlert (val) {
				if (val) {
					this.$el.MaterialSnackbar.showSnackbar(this.option);
					if (this.timeTick) {
						clearTimeout(this.timeTick);
					}
					const timeout = this.option.timeout ? this.option.timeout : 2750;
					this.timeTick= setTimeout(() => {
						this.showAlert = false
					}, timeout);
				}
			}
		}
	}
</script>