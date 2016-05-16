<template>
	<label v-bind:for.once="id" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" v-bind:class='{"is-disabled": disabled, "is-checked": isChecked}'>
		<input type="checkbox" class="mdl-checkbox__input" v-bind:value="value" v-bind:id.once="id" v-model="checked" v-bind:disabled="disabled">
		<span class="mdl-checkbox__label"><slot></slot></span>
	</label>
</template>

<script>
	import mixin from './mixin.js';

	export default {
		props: {
			id: String,
			checked: {
				type: [Array, Boolean, Number],
				required: true,
				twoWay: true
			},
			disabled: {
				required: false
			},
			value: {
				required: false
			}
		},
		computed: {
			isChecked () {
				if (this.checked instanceof Array) {
					return this.checked.indexOf(this.value) >= 0;
				} else {
					return this.checked;
				}
			}
		},
		ready () {
			componentHandler.upgradeElements(this.$el);
		},
		// mixins: [mixin],
	}
</script>