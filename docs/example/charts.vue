<style lang="less">
	.chart {
		width: 48%;
		height: 500px;
		display: inline-block;
	}
</style>

<template>
	<section>
		<h3 class="doc-title">Bar(柱状图)</h3>
		<div class="chart-content">
			<div class="chart" id="bar"></div>
			<div class="chart" id="dynamic-bar"></div>
		</div>
	</section>
</template>

<script>
	import ZCode from '../utils/zcode.vue';
	import echarts from 'echarts';

	export default {
		components: {
			ZCode
		},
		ready () {
			this.$dispatch('changeComponent', 'Charts');
			const doc = document;
			const bar = echarts.init(doc.getElementById('bar'));
			bar.setOption({
				title: { text: '柱状图' },
		    tooltip: {},
		    xAxis: {
		      data: ["A","B","C","D","E","F"]
		    },
		    yAxis: {},
		    series: [{
		      name: '访问量',
		      type: 'bar',
		      data: [5, 20, 36, 10, 10, 20]
		    }]
			});

			const dynamicBar = echarts.init(doc.getElementById('dynamic-bar'));
			const option = {
				title: {
       		text: '动态数据',
		    },
		    tooltip: {
		      trigger: 'axis'
		    },
		    legend: {
		      data:['最新成交价', '预购队列']
		    },
		    toolbox: {
		      show: true,
		      feature: {
		        dataView: {readOnly: false},
		        restore: {},
		        saveAsImage: {}
		      }
		    },
		    dataZoom: {
		      show: false,
		      start: 0,
		      end: 100
		    },
		    xAxis: [
	        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
              let now = new Date();
              let res = [];
              let len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                now = new Date(now - 2000);
              }
              return res;
            })()
	        },
	        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
              var res = [];
              var len = 10;
              while (len--) {
                res.push(len + 1);
              }
              return res;
            })()
	        }
		    ],
		    yAxis: [
	        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 20,
            min: 0,
            boundaryGap: [0.2, 0.2]
	        },
	        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
	        }
		    ],
		    series: [
	        {
            name:'预购队列',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                let res = [];
                let len = 10;
                while (len--) {
                  res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })()
	        },
	        {
            name:'最新成交价',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                  res.push((Math.random()*10 + 5).toFixed(1) - 0);
                  len++;
                }
                return res;
            })()
	        }
		    ]
			}
			dynamicBar.setOption(option);

			const app = {};
			clearInterval(app.timeTicket);
			app.count = 11;
			app.timeTicket = setInterval(() => {
				let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
		    let data0 = option.series[0].data;
		    let data1 = option.series[1].data;
		    data0.shift();
		    data0.push(Math.round(Math.random() * 1000));
		    data1.shift();
		    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

		    option.xAxis[0].data.shift();
		    option.xAxis[0].data.push(axisData);
		    option.xAxis[1].data.shift();
		    option.xAxis[1].data.push(app.count++);
		    dynamicBar.setOption(option);
			}, 2000)
		}
	}
</script>