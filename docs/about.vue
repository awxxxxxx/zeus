<style lang="less">
	body {
		font-family: "RobotoDraft","Roboto",sans-serif;
	}

	header.about {
		background: #00897B;
		color: #fff;
		padding: 20px 100px 50px;
		
		> .title {
		}
	}


	.component, .scalability, .permission, .usability {
		padding: 80px 100px;
		text-align: center;
		color: #757575;
	}
	
	.component {
		background: #fafafa;
		img {
			padding: 30px;
		}
	}

	.scalability {
		color: #fff;
		background: #B2DFDB;
	}

	.permission {
		background: #3F51B5;
		color: #fff;
		> div {
			margin-top: 15px;
		}
	}

	.usability {
		background: #212121;
		color: #757575;
	}
	
</style>

<template>
	<header class="about">
		<h1 class="title">ZEUS</h1>
		<h5>zues 是使用 Vue.js 和 Node.js 结合 Material Design 构建的可视化运营平台</h5>
	</header>
	<section class="component">
		<h3 class="doc-title">组件丰富</h3>
		<h5>zeus 集成了常用的基本组件，满足业务开发需要</h5>
		<h6>组件同时也可以单独构建抽离，用于其它项目</h6>
		<p>Table、Charts、Dialog、Datepicker、Select...</p>
		<section>
			<img src="./asserts/ic_change_history_black_48px.svg">
			<img src="./asserts/ic_trending_flat_black_48px.svg">
			<img src="./asserts/ic_grade_black_48px.svg">
		</section>
		<button class="mdl-button mdl-js-button mdl-js-ripple-effect  mdl-button--raised mdl-button--accent" id="doc-component" v-link="{name: 'doc'}">查看组件文档</button>
	</section>
	<section class="scalability">
		<h3>可扩展性</h3>
		<h5>Zeus 提供了丰富的组件同时，也提供了后续扩展开发的 API，任意搭配前端框架或者库</h5>
		<h5>满足个性化定制的需要</h5>
		<img src="./asserts/ic_settings_white_48px.svg">
	</section>
	<section class="permission">
		<h3>完备的权限控制</h3>
		<h5>Zeus-Server 提供了完善的接口校验机制，同时提供了权限配置接口，便于权限相关的操作</h5>
		<h5>快速接入多个运营后台</h5>
		<h5>权限控制到接口级别</h5>
		<img src="./asserts/ic_https_white_48px.svg">
		<div>
			<button class="mdl-button mdl-js-button mdl-js-ripple-effect  mdl-button--raised mdl-button--accent" id="doc-api" v-link="{name: 'api'}">查看后台接入规范</button>
			<button class="mdl-button mdl-js-button mdl-js-ripple-effect  mdl-button--raised mdl-button--accent" id="doc-component" v-link="{name: 'user'}">查看权限控制台</button>
		</div>
	</section>
	<section class="usability">
		<h3>易用性强</h3>
		<h5 class="vuejs">前端采用当下流行 <a href="http://vuejs.org/">Vue.js</a> 作为前端视图库，避免直接 DOM 操作, 上手简单，对初学者友好</h5>
		<h5 class="nodejs">后端采用 <a href="https://nodejs.org/en/">Node.js</a> 的 <a href="http://koajs.com/">Koa</a> 框架编写</h5>
		<h5>前后端统一使用 Javascript 开发，减少语言切换开销，进一步提升开发效率</h5>
		<img src="./asserts/ic_schedule_white_48px.svg">		
	</section>
</template>

<script>
	export default {
		ready () {
			componentHandler.upgradeElement(document.getElementById('doc-component'));
			componentHandler.upgradeElement(document.getElementById('doc-api'));
			this.$dispatch('changeComponent', 'About');
		}
	}
</script>