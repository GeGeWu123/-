<template>
  <div class="menu">
    <ul v-for="(item, index1) in courseList" :key="index1" >
      <li @click="handleSelect(item.keyId)">
        <a>{{ item.courseSystemName }}-{{item.courseType}}</a>
      </li>
    </ul>

    <!-- <ul v-for="(item, index1) in courseList" :key="index1" :default-active="nowKey" class="el-menu-demo" @select="handleSelect">
      <li :index="item.keyId">{{ item.courseSystemName }}-{{item.courseType}}</li>
    </ul> -->
      <!-- <el-submenu :index="item.keyId" >
        <template slot="title">{{ item.courseSystemName }}-{{item.courseType}}</template>
        <el-menu-item :index="item.keyId" >{{item.courseType}}</el-menu-item>
      </el-submenu> -->
    <div class="backg">
      <div id="treeChart" :style="{width: '800px', height: '500px', padding: '30px', position: 'static'}"></div>
    </div>
  </div>
</template>

<script>
import { getList, getById } from '@/api/courseSystem'
export default {
  data() {
    return {
      courseList: [],
      activeIndex: '1',
      nowKey: '1',
      showData: []
    };
  },
  created() {
    this.nowKey = '1';
    // this.showChart();
    this.findList();
  },
  methods: {
    handleSelect(key) {
      this.nowKey = key;
      console.log(key,'88888');
      this.showChart();
    },
    findList(){
      getList().then(res => {
        this.courseList = res.data;
        console.log(this.courseList, 'this.courseList ')
      })
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

<style lang="scss">
.backg {
  background: floralwhite;
}
.menu{
  padding-top:20px;
position: relative;
}
div.menu ul {
  list-style:none; /* 去掉ul前面的符号 */
  margin: 0px; /* 与外界元素的距离为0 */
  padding: 0px; /* 与内部元素的距离为0 */
  width: auto; /* 宽度根据元素内容调整 */
}
div.menu ul li{
  float:left;
}
div.menu ul li a, div.menu ul li a:visited
{
    background-color: #465c71; /* 背景色 */
    border: 1px #4e667d solid; /* 边框 */
    color: #dde4ec; /* 文字颜色 */
    display: block; /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    line-height: 1.35em; /* 行高 */
    padding: 4px 20px; /* 内部填充的距离 */
    text-decoration: none; /* 不显示超链接下划线 */
    white-space: nowrap; /* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */
div.menu ul li a:hover
{
    background-color: #bfcbd6; /* 背景色 */
    color: #465c71; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标点击元素时的样式) */
div.menu ul li a:active
{
    background-color: #465c71; /* 背景色 */
    color: #cfdbe6; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}
#treeChart{
  width: '800px';height: '500px'; margin: '30px';position: 'static';
}
</style>
