<template>
	<date-picker :option="timeOption" :time.sync="time"></date-picker>
</template>

<script>
	import DatePicker from 'vue-datepicker';
	import extend from './utils/extend.js';
	import moment from 'moment';

	export default {
		components: {
			DatePicker,
		},
		props: {
			option: {
				type: Object,
				default () {
					return {}
				}
			},
			time: {
				type: String,
				twoWay: true,
				default () {
					return moment().format('YYYY-MM-DD');
				}
			}
		},
		data () {
			const initOption = {
				type: 'day',
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
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
			};
			const timeOption = extend({}, initOption, this.option);
			return {
				timeOption: timeOption
			}
		}
	}
</script>