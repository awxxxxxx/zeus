require('material-design-lite/material.css');
require('material-design-lite/material.js');

import Vue from 'vue';
import ZMdl from '../src/zeus.js';
import VueRouter from 'vue-router';
import VueResoure from 'vue-resource';
import Doc from './doc.vue';
import About from './about.vue';
import Dashboard from './dashboard/dashboard.vue';
import DashboardAdmin from './dashboard/admin.vue';
import DashboardPlatform from './dashboard/platform.vue';
import DashboardUser from './dashboard/user.vue';
import Examples from './example/example.js'	;

require('prismjs/themes/prism.css');

Vue.use(ZMdl);
Vue.use(VueResoure);
Vue.http.options.root = 'http://localhost:3000';
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
			},
			'/user': {
				name: 'user',
				component: DashboardUser
			},
			'/platform': {
				name: 'platform',
				component: DashboardPlatform
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
			},
			'/installation': {
				name: 'installation',
				component: Examples.Installation
			},
			'/api': {
				name: 'api',
				component: Examples.Api
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