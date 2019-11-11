export default [
	{path: '/', redirect: 'home'}, //默认路径
	{
		path: '/home',
		name: 'home',
		meta: {
			title: '2019首届黑龙江省哈尔滨市呼兰县A-9“诚信商家”评选大赛'
		},
		component: resolve => require(['../views/home/home.vue'], resolve) //按需加载，只有在进入该页面的时候加载，并不会启动项目全部加载
	},
	{
		path: '/mine',
		name: 'mine',
		meta: {
			title: '我的'
		},
		component: resolve => require(['../views/mine/mine.vue'], resolve)
	},
	{
		path: '/rank',
		name: 'rank',
		meta: {
			title: 'rank'
		},
		component: resolve => require(['../views/rank/rank.vue'], resolve)
	},
	{
		path: '/rule',
		name: 'rule',
		meta: {
			title: '我的'
		},
		component: resolve => require(['../views/rule/rule.vue'], resolve)
	},
	{
		path: '/news',
		name: 'news',
		meta: {
			title: '新闻'
		},
		component: resolve => require(['../views/news.vue'], resolve)
	}
]
