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
import Login from './login.vue';
import Examples from './example/example.js'	;
import Nomatch from './404.vue';
require('prismjs/themes/prism.css');

Vue.use(ZMdl);
Vue.use(VueResoure);
Vue.http.options.root = 'http://localhost:3000';
Vue.http.options.xhr = {
	withCredentials: true
}
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
	'/login': {
		name: 'login',
		component: Login
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
	'/404': {
		name: '404',
		component: Nomatch
	}
});
router.redirect({
	'/': '/about',
	'/doc': '/doc/button',
	'/dashboard': 'dashboard/admin',
	'*': '/404'
});


router.beforeEach(({to, next}) => {
	if (/dashboard/.test(to.path)) {
		let user = sessionStorage.getItem('user');
		if (user) {
			next();
		} else {
			router.go({name: 'login'});
		}
	} else {
		next();
	}
	
})
router.start(app, 'body');
