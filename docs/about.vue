<template>
	<h1 class="doc-title">About zeus</h1>
	<p>zues 是使用 Vue.js 的 node.js 搭建的可视化运营平台</p>
</template>

<script>
	export default {
		ready () {
			this.$dispatch('changeComponent', 'About');
		}
	}
</script>