<template>
	<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" v-bind:for.once='id' v-bind:class='{"is-checked": isChecked, "is-disabled": disabled}'>
  	<input type="radio" v-bind:id.once="id" class="mdl-radio__button" v-bind:name.once="name" v-bind:value="value" v-model="checked" v-bind:disabled="disabled">
  	<span class="mdl-radio__label">
  		<slot></slot>
  	</span>
	</label>
</template>

<script>
	export default {
		props: {
			id: String,
			name: String,
			value: {
				required: true
			},
			checked: {
				required: true,
				twoWay: true
			},
			disabled: { 
				default () {
					return false;
				}
			}
		},
		computed: {
			isChecked () {
				return this.checked === this.value;
			}
		},
		ready () {
    	componentHandler.upgradeElements(this.$el);
  	}
	}
</script>