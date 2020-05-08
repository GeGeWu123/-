<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">一四级课程体系</el-menu-item>
      <el-menu-item index="2">一五级课程体系</el-menu-item>
      <el-menu-item index="3">一六级课程体系</el-menu-item>
      <el-submenu index="4">
        <template slot="title">一七级课程体系</template>
        <el-menu-item index="4-1">按学期划分</el-menu-item>
        <el-menu-item index="4-2">按培养方向划分</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">一八级课程体系</template>
        <el-menu-item index="5-1">按学期划分</el-menu-item>
        <el-menu-item index="5-2">按培养方向划分</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">一九级课程体系</template>
        <el-menu-item index="6-1">按学期划分</el-menu-item>
        <el-menu-item index="6-2">按培养方向划分</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- <img src="../../assets/课程体系.png" alt=""> -->
    <div>
      <div id="treeChart" :style="{width: '800px', height: '500px', padding: '30px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      treedata:[{
        name: '一七级课程体系',
        children: [
          {
            name: '企业信息化方向',
            children: [
              {
                name: '信息资源管理'
              },
              {
                name: '企业信息系统及应用 '
              },
              {
                name: 'SAP ERP 基础实务'
              },
              {
                name: '信息系统审计'
              },
              {
                name: 'IT 项目管理'
              }
            ]
          },
          {
            name: '信息系统开发方向',
            children: [
              {
                name: '信息资源管理'
              },
              {
                name: '企业信息系统及应用 '
              },
              {
                name: 'SAP ERP 基础实务'
              },
              {
                name: '信息系统审计'
              },
              {
                name: 'IT 项目管理'
              }
            ]
          },
          {
            name: '财经大数据分析方向',
            children: [
              {
                name: '数据科学导论'
              },
              {
                name: '大数据分析与预测技术 '
              },
              {
                name: 'Hadoop 大数据处理技术'
              },
              {
                name: '信息系统审计'
              },
              {
                name: 'IT 项目管理'
              }
            ]
          }
        ]
      }]
    };
  },
  mounted() {
    this.showChart();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
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
.ml30{
  margin-left: 30px;
}
.m50{
  margin: 50px
}
</style>
