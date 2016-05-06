//require('../node_modules/material-design-lite/material.js');
//require('../node_modules/material-design-lite/material.css');
import ZButton from './button.vue';

export const components = {
	ZButton
}


export default {
	install (Vue) {
		Object.keys(components).forEach((name) => {
			Vue.component(name, components[name])
		});
	}
}