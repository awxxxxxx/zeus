<template>
	<section>
		<h3 class="doc-title">Progress</h3>
		<h5 class="doc-title">default</h5>
		<z-progress :progress="progress"></z-progress>
		<z-code lang="html">{{ defaultCode }}</z-code>
		<h5 class="doc-title">buffer</h5>
		<z-progress :progress="progress" :buffer="buffer"></z-progress>
		<z-code lang="html">{{ bufferCode }}</z-code>
		<h5 class="doc-title">indeterminate</h5>
		<z-progress indeterminate="true"></z-progress>
		<z-code lang="html">{{ indeteCode }}</z-code>
	</section>
	<section>
		<div>
			<h3 class="doc-title">Spinner</h3>
			<h5 class="doc-title">default</h5>
			<z-spinner :active="active"></z-spinner>
			<z-code lang="html">{{ activeCode }}</z-code>
		</div>
		<div>
			<h5 class="doc-title">single color</h5>
			<z-spinner :active="active" :single-color="true"></z-spinner>
			<z-code lang="html">{{ singleCode }}</z-code>
		</div>
	</section>
	<section>
		<h3 class="doc-title"></h3>
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
				progress: 30,
				buffer: 80,
				defaultCode: `<z-progress :progress="progress"></z-progress>`,
				bufferCode: `<z-progress :progress="progress" :buffer="buffer"></z-progress>`,
				indeteCode: `<z-progress indeterminate="true"></z-progress>`,
				active: true,
				activeCode: `<z-spinner :active="active"></z-spinner>`,
				singleCode: `<z-spinner :active="active" :single-color="true"></z-spinner>`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Slider');
		}
	}
</script>