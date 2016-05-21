<style lang="less">
	.chart {
		width: 48%;
		height: 500px;
		display: inline-block;
	}

	.other {
		h5 {
			color: #757575;
			padding: 10px 30px;
		}
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
	<section>
		<h3 class="doc-title">Pie(饼状图)</h3>
		<div class="chart-content">
			<div class="chart" id="pie"></div>
			<div class="chart" id="solid-pie"></div>
		</div>
	</section>
	<section class="other">
		<h3 class="doc-title">Other</h3>
		<h5>zeus 结合了可视化图表库 echarts ，可以方便直观的可视化展示数据</h5>
		<h5>更多图表类型请看 <a href="http://echarts.baidu.com/index.html">Echarts</a> 的官方文档</h5>
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
			this.$nextTick(() => {
				this.$dispatch('changeComponent', 'Charts');
			});
			const doc = document;

			// 柱状图
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

			// 动态柱状图
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
			}, 2000);

			// 饼状图
			const pie = echarts.init(doc.getElementById('pie'));
			pie.setOption({
				title: {
					subtext: '环形饼状图',
					x: 'center'
				},
		    tooltip: {
		      trigger: 'item',
		      formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		      orient: 'vertical',
		      x: 'left',
		      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series: [
	        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
	        }
		    ]
			});

			// 实心饼状图
			const solidPie = echarts.init(doc.getElementById('solid-pie'));
			solidPie.setOption({
		    title : {
	        text: '某站点用户访问来源',
	        subtext: '实心饼状图',
	        x:'center'
		    },
		    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
	            }
	        }
		    ]
			});
		}
	}
</script>