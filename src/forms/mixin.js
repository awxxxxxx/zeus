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
	}
}