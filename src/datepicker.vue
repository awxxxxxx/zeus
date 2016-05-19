<style lang="less">
	
</style>

<template>
	<div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="sample1" @focus="show">
    <label class="mdl-textfield__label" for="sample1">{{ label }}</label>
  </div>
</template>

<script>
	import MaterialDateTimePicker from '../node_modules/material-datetime-picker/lib/js/index.js';
	import moment from 'moment';

	export default {
		props: {
			label: {
				type: String,
				default () {
					return moment().format('YYYY-MM-DD hh:mm:ss');
				}
			}
		},
		data () {
			const picker = new MaterialDateTimePicker()
				.on('submit', (val) => console.log(`data: ${val}`))
    		.on('open', () => console.log('opened'))
    		.on('close', () => console.log('closed'));
    	return {
    		picker: picker
    	}
		},
		ready () {
			componentHandler.upgradeElements(this.$el);
		},
		methods: {
			show () {
				this.picker.open();
			}
		}

	}
</script>