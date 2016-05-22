require('material-design-lite/material.css');
require('material-design-lite/material.js');

import Vue from 'vue';
import ZMdl from '../src/zeus.js';
import VueRouter from 'vue-router';
import Doc from './doc.vue';
import About from './about.vue';
import Dashboard from './dashboard/dashboard.vue';
import DashboardAdmin from './dashboard/admin.vue';
import Examples from './example/example.js'	;

require('prismjs/themes/prism.css');

Vue.use(ZMdl);
Vue.use(VueRouter);

let router = new VueRouter({history: true});

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
	'/dashboard': {
		name: 'dashboard',
		component: Dashboard,
		subRoutes: {
			'/admin': {
				name: 'admin',
				component: DashboardAdmin
			}
		}
	},
	'/doc': {
		name: 'doc',
		component: Doc,
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
			},
			'/pagination': {
				name: 'pagination',
				component: Examples.Pagination
			},
			'/select': {
				name: 'select',
				component: Examples.Select
			},
			'/upload': {
				name: 'upload',
				component: Examples.Upload
			},
			'/charts': {
				name: 'charts',
				component: Examples.Charts
			},
			'/alert': {
				name: 'alert',
				component: Examples.Alert
			}
		}
	},
});
router.redirect({
	'/doc': '/doc/button',
	'/dashboard': 'dashboard/admin',
	'*': '/about'
})
router.start(app, 'body');