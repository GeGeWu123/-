<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">一五版课程体系</el-menu-item>
      <el-submenu index="17">
        <template slot="title">一七版课程体系</template>
        <el-menu-item index="2">按学期划分</el-menu-item>
        <el-menu-item index="8">按培养方向划分</el-menu-item>
      </el-submenu>
      <el-submenu index="19">
        <template slot="title">一九版课程体系</template>
        <el-menu-item index="9">按学期划分</el-menu-item>
        <el-menu-item index="10">按培养方向划分</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="backg">
      <div id="treeChart" :style="{width: '800px', height: '500px', padding: '30px'}"></div>
    </div>
  </div>
</template>

<script>
import { getList, getById } from '@/api/courseSystem'
export default {
  data() {
    return {
      activeIndex: '1',
      nowKey: '',
      showData: []
    };
  },
  created() {
    this.nowKey = '1';
    this.showChart();
  },
  methods: {
    handleSelect(key, keyPath) {
      this.nowKey = key;
      console.log(key, keyPath);
      this.showChart();
    },
    showChart() { // 拿key取数据渲染节点
      getById(this.nowKey).then(res => {
        this.showData = [];
        this.showData.push(res.data.courseSystemJson);
          console.log(this.showData, 'showdata')
          // 基于准备好的dom，初始化echarts实例
          var myChart = this.$echarts.init(document.getElementById('treeChart'));
          var option = {
            title: {},
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: this.showData,

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
})
    }
  }
}
</script>

<style>
.backg{
  background: floralwhite;
}
</style>
