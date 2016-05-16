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
	}
}