<template>
	<section>
		<h3 class="doc-title">Date</h3>
		<z-datepicker :time.sync="time"></z-datepicker>
		<z-code lang="html">{{ timeCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">Date time</h3>
		<z-datepicker :time.sync="datetime" :option="dateoption"></z-datepicker>
		<z-datepicker :time.sync="datehearttime" :option="dateoption"></z-datepicker>
		<z-code lang="html">{{ datetimeCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">All props</h3>
		<z-code lang="javascript">{{ propsCode }}</z-code>
	</section>
</template>

<script>
	import ZCode from '../utils/zcode.vue';
	import moment from 'moment';

	export default {
		components: {
			ZCode
		},
		data () {
			return {
				time: moment().format('YYYY-MM-DD'),
				datetime: moment().format('YYYY-MM-DD HH:mm'),
				timeCode: `<template>
				<z-datepicker :time.sync="time"></z-datepicker>
			</template>
			<script>
				import moment from 'moment';
				export default {
					data () {
						return {
							time: moment().format('YYYY-MM-DD')
						}
					}
				}
			<script>`,
				dateoption: {
					type: 'min',
					format: 'YYYY-MM-DD HH:mm'
				},
				datehearttime: moment().format('YYYY-MM-DD HH:mm:ss'),
				datetimeCode: `<template>
				<z-datepicker :time.sync="time" :option="dateoption"></z-datepicker>
			</template>
			<script>
				import moment from 'moment';
				export default {
					data () {
						return {
							time: moment().format('YYYY-MM-DD HH:mm'),
							dateoption: {
								type: 'min',
								format: 'YYYY-MM-DD HH:mm'
							}
						}
					}
				}
			<script>`,
				propsCode: `{
				option: {
					type: 'day' || 'min',
					week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
					month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					format: 'YYYY-MM-DD',
					placeholder: '日期',
					inputStyle: {
						'display': 'inline-block',
						'padding': '6px',
						'line-height': '22px',
						'font-size': '16px',
						'border': '2px solid #fff',
						'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
						'border-radius': '2px',
						'color': '#5F5F5F'
					},
					color: {
						header: '#ccc',
						headerText: '#f00'
					},
					buttons: {
						ok: '确定',
						cancel: '取消'
					}，
					overlayOpacity: 0.5,
					dismissible: true
				}
			}`
			};
		},
		ready () {
			this.$dispatch('changeComponent', 'Datepicker');
			setInterval(() => {
				this.$nextTick(() => {
					this.datehearttime = moment().format('YYYY-MM-DD HH:mm:ss');
				})
			}, 1000);
		}
	}
</script>