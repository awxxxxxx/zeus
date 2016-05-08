require('material-design-lite/material.css');
require('material-design-lite/material.js');

import Vue from 'vue';
import ZMdl from '../src/zeus.js';
import VueRouter from 'vue-router';
import App from './app.vue';
import Examples from './example/example.js'	;

require('prismjs/themes/prism.css');

Vue.use(ZMdl);
Vue.use(VueRouter);

let router = new VueRouter();

const app = Vue.extend({
	el () {
		return 'body';
	},
	data () {
		return {
			Home: 'Button'
		}
	},
	components: { App }
});

router.map({
	'/button': {
		name: 'button',
		component: Examples.Buttons
	}
});
router.start(app, 'body');