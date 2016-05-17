<template>
	<label v-bind:for.once="id" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" v-bind:class='{"is-disabled": disabled, "is-checked": isChecked}'>
		<input type="checkbox" class="mdl-checkbox__input" v-bind:value="value" v-bind:id.once="id" v-model="checked" v-bind:disabled="disabled">
		<span class="mdl-checkbox__label"><slot></slot></span>
	</label>
</template>

<script>
	import mixin from './mixin.js';

	export default {
		mixins: [mixin],
		ready () {
			componentHandler.upgradeElements(this.$el);
		},
	}
</script>