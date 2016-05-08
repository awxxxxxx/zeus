<template>
	<div>
		<div class="doc-title"><h3>Raised</h3></div>
		<z-button>
			button
		</z-button>
		<z-code lang="html">
			{{ code.buttonNormal }}
		</z-code>
		<h2 class="doc-title">Fab</h2>
		<z-button :mini-fab="true"><i class="material-icons">add</i></z-button>
		<z-code lang="html">
			{{ code.buttonFab }}
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
					buttonNormal: `<z-button>button<z-button>`,
					buttonFab: `
			<z-button :mini-fab="true">
				<i class="material-icons">add</i>
			</z-button>`
				}
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Button');
		}
	}
</script>
