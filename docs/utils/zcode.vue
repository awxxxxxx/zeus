<template>
	<pre>
		<code :class="'language-'+lang">
			<slot></slot>
		</code>
	</pre>
</template>
<script>
	import prismjs from 'prismjs';

	export default {
		props: {
			lang: String
		},
		ready () {
			prismjs.highlightAll();	
		}
	}
</script>