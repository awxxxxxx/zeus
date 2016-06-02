<template>
	<div>
		<div class="doc-title"><h3>Raised</h3></div>
		<z-button>
			button
		</z-button>
		<z-button :primary="true">primary</z-button>
		<z-code lang="html">
			{{ code.buttonNormal }}
		</z-code>
		<h2 class="doc-title">Fab</h2>
		<z-button :mini-fab="true"><i class="material-icons">＋</i></z-button>
		<z-button :fab="true"><i class="material-icons">＋</i></z-button>
		<z-code lang="html">
			{{ code.buttonFab }}
		</z-code>
		<h2 class="doc-title">Accent</h2>
		<z-button :accent="true">accent</z-button>
		<z-code lang="html">
			{{ code.accent }}
		</z-code>
		<h2 class="doc-title">Button Props</h2>
		<z-code lang="html">
			{{ code.props }}
		</z-code>
	</div>
</template>
<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		data () {
			return {
				code: {
					buttonNormal: `<z-button>button<z-button>
			<z-button :primary="true"></z-button>`,
					buttonFab: `
			<z-button :mini-fab="true">
				<i class="material-icons">add</i>
			</z-button>
			<z-button :fab="true">
				<i class="material-icons">add</i>
			<z-button>`,
					accent: `<z-button :accent="true">accent<z-button>`,
					props: `<z-button :mini-fab="true||false"><z-button>
			<z-button :fab="true||false"></z-button>
			<z-button :primary="true||false"></z-button>
			<z-button :accent="true||false"></z-button>
			<z-button :raised="true||false"></z-button>
			<z-button :colored="true||false"></z-button>`
				}
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Button');
		}
	}
</script>
