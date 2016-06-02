<template>
	<button type="button" class="mdl-button mdl-button--raised" @click="show">Show Dialog</button>
	<z-dialog :show-dialog.sync="showDialog">
		<div class="mdl-dialog__content">
      <p>
        确定要执行此操作?
      </p>
    </div>
	</z-dialog>
	<z-code lang="html">{{ dialogCode }}</z-code>
</template>

<script>
	import ZCode from '../utils/zcode.vue';
	export default {
		components: {
			ZCode
		},
		data () {
			return {
				showDialog: false,
				dialogCode: `<template>
			<z-dialog :show-dialog.sync="showDialog">
			<div class="mdl-dialog__content">
				<p>确定要执行此操作?</p>
			</div>
    		<div class="mdl-dialog__actions mdl-dialog__actions--full-width">
    			<button type="button" class="mdl-button" @click="close">Yes</button>
    			<button type="button" class="mdl-button close" @click="close">No</button>
    		</div>
    		</z-dialog>
    	<template>
    	<script>
    		export default {
    			data () {
    				return {
    					showDialog: false
    				}
    			},
    			methods: {
    				show () {
    					this.showDialog = true;
    				},
    				close () {
    					this.showDialog = false;
    				}
    			}
    		}
    	<\/script>`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Dialog');
		},
		methods: {
			show () {
				this.showDialog = true;
			},
			close () {
				this.showDialog = false;
			}
		}
	}
</script>