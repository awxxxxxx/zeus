<template>
  <dialog class="mdl-dialog">
    <slot></slot>
  </dialog>
</template>

<script>
	export default {
		props: {
			showDialog: {
				type: Boolean,
				default: false,
				twoWay: true
			}
		},
		watch: {
			showDialog (value) {
				if (value) {
					this.$el.showModal();
				} else {
					this.$el.close();
				}
			}
		},
		ready() {
			if (!this.$el.showModal) {
      	dialogPolyfill.registerDialog(dialog);
    	}
		}
	}
</script>