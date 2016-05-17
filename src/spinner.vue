<template>
	<div class="mdl-spinner mdl-js-spinner" v-bind:class='{ "mdl-spinner--single-color": singleColor, "is-active": active }'></div>
</template>

<script>
	export default {
		props: {
	    active: {
	      default: true,
	      type: Boolean
	    },
	    singleColor: {
	      default: false
	    }
	  },
	  ready () {
	    componentHandler.upgradeElement(this.$el, 'MaterialSpinner')
	  },
	}
</script>