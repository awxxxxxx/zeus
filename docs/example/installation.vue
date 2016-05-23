<template>
	<section>
		<h3 class="doc-title">使用说明</h3>
		<p>克隆项目后，进入项目目录， 如果使用 es6 开发则可以按一下方式引入</p>
		<z-code lang="javascript">{{ es6 }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">构建说明</h3>
		<z-code lang="javascript">{{ bashCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">扩展组件</h3>
		<p>当组件不能满足业务发展的需要，需要增加组件或者定制组件时，可以在 <em>src</em> 目录下开发组件</p>
		<z-code lang="javascript">{{ devCode }}</z-code>
	</section>
</template>

<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		data () {
			return {
				es6: `
			import Vue from 'Vue';
			import ZMdl from 'ZMdl';
			Vue.use(ZMdl);
				`,
				bashCode: `
					// 进入本地开发模式
					#npm run dev

					// 构建使用文档
					#npm run doc
					
					// 构建前端组件
					#npm run build
				`,
				devCode: `
					// zeus 的组件规范默认以 z- 开头
					例如 <z-datepicker>
					需要扩展组件时，在 src 添加了组件之后，将组件注册到 zeus.js 即可
				`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Installation');
		}
	}
</script>