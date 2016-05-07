<template>
	<div>
		<h1 class="mdl-layout-title">普通按钮</h1>
		<z-button>
			haha
		</z-button>
		<pre>
			<code class="html">
				<p>{{ code.buttonNormal }}</p>
			</code>
		</pre>
		<h1 class="mdl-layout-title">圆形按钮</h1>
		<z-button :mini-fab="true"><i class="material-icons">add</i></z-button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				code: {
					buttonNormal: '<z-button><z-button>'
				}
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Button');
		}
	}
</script>
