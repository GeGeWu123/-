<template>
  <div class="bcg">
    <div id="treeChart" :style="{width: '1000px', height: '650px', padding: '30px'}"></div>
  </div>
</template>

<script>
export default {
  name: "eCharts",
  data() {
    return {
      treedata:[{
        name: '本科发展方向',
        children: [
          {
            name: '深造学习',
            children: [
              {
                name: '研究生',
                children: [
                  {
                    name: '国内读研',
                    children: [
                      {
                        name:'考研方向',
                        children: [
                          {
                            name: '管理科学与工程'
                          },
                          {
                            name: '工商管理'
                          },
                          {
                            name: '公共管理'
                          },
                          {
                            name: '情报学'
                          }
                        ]
                      },
                      {
                        name:'能力要求',
                      }
                    ]
                  },
                  {
                    name: '国外读研',
                    children: [
                      {
                        name: '申请流程'
                      },
                      {
                        name: '能力要求'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '直接就业',
            children: [
              {
                name: '就业方向',
                children: [
                  {
                    name: '企业信息化方向'
                  },
                  {
                    name: '信息系统开发方向'
                  },
                  {
                    name: '财经大数据分析方向'
                  }
                ]
              },
              {
                name: '职业资格认证'
              }
            ]
          }
        ]
      }]
    }
  },
  mounted() {
    this.showChart();
  },
  methods: {
    showChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('treeChart'));

      // 指定图表的配置项和数据
      var option = {
        title: {},
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: this.treedata,

                top: '1%',
                left: '20%',
                bottom: '1%',
                right: '40%',

                symbolSize: 7,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 13
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>

<style>
.bcg{
  background: aliceblue;
}
</style>
