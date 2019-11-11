//当前没有引入axios插件，如需使用请先安装依赖，请求封装在utils/request.js
// cnpm install axios -s

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import {
	Toast,
	Pagination
} from 'vant';
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../utils/statistics.js';

import Tab from './components/tab/tab.vue' //导航

import utils from '../utils/utils.js'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Toast);
Vue.use(Pagination);
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.component('wTab', Tab) //全局组件注册

const router = new VueRouter({
	mode: 'hash', //process.env.NODE_ENV === 'production' ? 'history' : 'hash'
	base: '/',
	linkActiveClass: 'u-link--Active', // 这是链接激活时的class
	routes: routes
})

router.beforeEach(async (to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next()
})

//页面打开以后
router.afterEach((to, from) => {

})

Vue.mixin({
	computed: {
		user() {
			return store.state.user
		}
	},
	methods: {

	}
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
	mounted: () => {
		Vue.nextTick(() => {
			document.body.removeChild(document.querySelector('.xx-svg__global'))
		})
	}
})
