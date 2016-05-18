//require('../node_modules/material-design-lite/material.js');
//require('../node_modules/material-design-lite/material.css');
import ZButton from './button.vue';
import ZRadio from './forms/radio.vue';
import ZCheckbox from './forms/checkbox.vue';
import ZSwitch from './forms/toggle.vue';
import ZProgress from './progress.vue';
import ZSpinner from './spinner.vue';

export const components = {
	ZButton,
	ZRadio,
	ZCheckbox,
	ZSwitch,
	ZProgress,
	ZSpinner
}


export default {
	install (Vue) {
		Object.keys(components).forEach((name) => {
			Vue.component(name, components[name])
		});
	}
}