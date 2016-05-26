<template>
	<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
	  <thead>
	    <tr>
	      <th class="" v-for="field in fields">{{ field.title }}</th>
	      <th>OPTIONS</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr v-for="grid in gridData">
	      <td class="" v-for="field in fields">{{ grid[field.field] }}</td>
				</td>
	    </tr>
  	</tbody>
	</table>
</template>

<script>
	export default {
		props: {
			fields: {
				type: Array,
				default () {
					return {};
				}
			},
			gridData: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		ready () {
			componentHandler.upgradeElement(this.$el);
		}
	}
</script>