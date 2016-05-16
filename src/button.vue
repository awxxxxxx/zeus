<style lang="less">
	
</style>

<template>
	<button class="mdl-button mdl-js-button mdl-js-ripple-effect" v-bind:class="buttonClass">
		<slot></slot>	
	</button>
</template>

<script>
	export default {
		computed: {
			buttonClass () {
				return {
					'mdl-button--icon': this.icon,
	        'mdl-button--accent': this.accent,
	        'mdl-button--primary': this.primary,
	        'mdl-button--mini-fab': this.miniFab,
	        'mdl-button--fab': this.fab || this.miniFab,
	        'mdl-button--raised': this.raised,
	        'mdl-button--colored': this.colored
				}
			}
		},
		props: {
	    disabled: {
	      type: Boolean
	    },
	    icon: {
	      required: false
	    },
	    accent: {
	      type: Boolean
	    },
	    primary: {
	      type: Boolean
	    },
	    miniFab: {
	      type: Boolean
	    },
	    fab: {
	      type: Boolean
	    },
	    raised: {
	      type: Boolean
	    },
	    colored: {
	      type: Boolean
	    }
  	},
  	ready () {
    	componentHandler.upgradeElement(this.$el);
  	}
	}
</script>