<template>
  <dialog class="mdl-dialog">
    <slot></slot>
    <div class="mdl-dialog__actions mdl-dialog__actions">
      <button type="button" class="mdl-button" @click="confirm">确定</button>
      <button type="button" class="mdl-button close" @click="cancel">取消</button>
    </div>
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
		data() {
			return {
				result: 'none'
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
		methods: {
			show() {
				this.showDialog = true;

				return new Promise((resolve, reject) => {
					this.$watch('result', (newVal, oldVal) => {
						if (newVal === 'confirm') {
							resolve();
						}
						else
						if (newVal === 'cancel') {
							reject();
						}
					});
				})
			},
			cancel () {
				this.showDialog = false;
				this.result = 'cancel';
			},
			confirm () {
				this.showDialog = false;
				this.result = 'confirm';
			}
		},
		ready() {
			if (!this.$el.showModal) {
      	dialogPolyfill.registerDialog(dialog);
    	}
		}
	}
</script>