<template>
	<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp" v-bind:class='{"mdl-data-table--selectable": tableOptions.checkbox}'>
	  <thead>
	    <tr>
	      <th class="mdl-data-table__cell--non-numeric">Material</th>
	      <th>Quantity</th>
	      <th>Unit price</th>
	      <th>Quantity</th>
	      <th>Unit price</th>
	      <th>options</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
	      <td>25</td>
	      <td>$2.90</td>
	      <td>25</td>
	      <td>$2.90</td>
	    </tr>
	    <tr>
	      <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
	      <td>50</td>
	      <td>$1.25</td>
	      <td>25</td>
	      <td>$2.90</td>
	    </tr>
	    <tr>
	      <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
	      <td>10</td>
	      <td>$2.35</td>
	      <td>25</td>
	      <td>$2.90</td>
	    </tr>
  	</tbody>
	</table>
</template>

<script>
	export default {
		props: {
			tableOptions: {
				type: Object,
				default () {
					return {
						checkbox: true
					}
				}
			},
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