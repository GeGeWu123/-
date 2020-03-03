<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item.name}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
        </div>
        <div class="text item">
          {{item.describe}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '信息系统开发方向',
          describe: '“信息系统开发”方向侧重培养学生利用信息系统解决管理中的实际问题以及信息系统开发建设的能力。'
        },
        {
          name: '企业信息化方向',
          describe: '“企业信息化”方向侧重培养学生的组织信息系统战略规划、分析与设计和组织信息化管理咨询等方面能力。'
        },
        {
          name: '财经大数据分析方向',
          describe: '“财经大数据分析”方向侧重培养学生的财经大数据采集、存储处理以及分析利用能力。'
        }
      ]
    }
  }
}
</script>

<style>
  .container {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 280px;
    margin: 30px;
  }
</style>

