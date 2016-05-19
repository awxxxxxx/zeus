require('material-design-lite/material.css');
require('material-design-lite/material.js');

import Vue from 'vue';
import ZMdl from '../src/zeus.js';
import VueRouter from 'vue-router';
import App from './app.vue';
import About from './about.vue';
import Examples from './example/example.js'	;

require('prismjs/themes/prism.css');

Vue.use(ZMdl);
Vue.use(VueRouter);

let router = new VueRouter();

const app = Vue.extend({
	el () {
		return 'body';
	}
});

router.map({
	'/about': {
		name: 'about',
		component: About
	},
	'/doc': {
		name: 'doc',
		component: App,
		subRoutes: {
			'/button': {
				name: 'button',
				component: Examples.Buttons
			},
			'/forms': {
				name: 'forms',
				component: Examples.Forms
			},
			'/slider': {
				name: 'slider',
				component: Examples.Slider
			},
			'/table': {
				name: 'table',
				component: Examples.Table
			},
			'/dialog': {
				name: 'dialog',
				component: Examples.Dialog
			},
			'/datepicker': {
				name: 'datepicker',
				component: Examples.Datepicker
			}
		}
	},
});
router.redirect({
	'/doc': '/doc/button',
	'*': '/about'
})
router.start(app, 'body');