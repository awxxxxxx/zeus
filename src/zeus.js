//require('../node_modules/material-design-lite/material.js');
//require('../node_modules/material-design-lite/material.css');
import ZButton from './button.vue';
import ZRadio from './forms/radio.vue';
import ZCheckbox from './forms/checkbox.vue';

export const components = {
	ZButton,
	ZRadio,
	ZCheckbox
}


export default {
	install (Vue) {
		Object.keys(components).forEach((name) => {
			Vue.component(name, components[name])
		});
	}
}