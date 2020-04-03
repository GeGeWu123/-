<template>
  <div class="row wrap">
    <el-card :style="randomRgb()" class="box-card" v-for="(item, index) in jobList" :key="index">
      <div slot="header" class="clearfix">
        <span class="f24">{{ item.name }}</span>
        <el-button plain style="float: right; padding: 7px 6px">相关招聘</el-button>
      </div>
      <div class="f14 item">
        <p>
          <span class="f17">工作内容：</span>
          {{ item.content }}
        </p>
        <p>
          <span class="f17">岗位要求：</span>
          {{ item.request }}
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobList: [
       {
          name: '系统分析师',
          content: '对软件项目进行整体规划、需求分析、设计软件的核心架构、指导和领导项目开发小组进行软件开发和软件实现，并对整个项目进行全面的管理工作。',
          request: '具有系统工程的基础知识；掌握开发信息系统的综合技术知识；熟悉企业信息化建设，并具有组织信息化战略规划的知识；熟悉掌握信息系统开发过程和方法；熟悉信息系统开发标准；掌握信息安全的相关知识与技术；具有经济与管理科学的相关基础知识，熟悉有关的法律法规；具有大学本科的数学基础；'
       },
       {
          name: '需求分析师',
          content: '需求获取、需求分析、编写需求规格说明书和需求评审',
          request: '具有一定的工作经验，如软件开发、需求分析、系统分析；了解软件开发的过程，包括编程语言和数据库，具有一定的技术背景；具有很强的文档撰写能力及表达理解能力，能够理解客户的需求并向设计开发人员清晰的阐述。'
       },
       {
          name: '研发经理',
          content: '对软件项目进行整体规划、需求分析、设计软件的核心架构、指导和领导项目开发小组进行软件开发和软件实现，并对整个项目进行全面的管理工作。',
          request: '具有系统工程的基础知识；掌握开发信息系统的综合技术知识；熟悉企业信息化建设，并具有组织信息化战略规划的知识；熟悉掌握信息系统开发过程和方法；熟悉信息系统开发标准；掌握信息安全的相关知识与技术；具有经济与管理科学的相关基础知识，熟悉有关的法律法规；具有大学本科的数学基础；'
       }
      ]
    }
  },
  created() {},
  methods: {
    randomRgb() {
      let R = Math.floor(Math.random() * 130+110);
      let G = Math.floor(Math.random() * 130+110);
      let B = Math.floor(Math.random() * 130+110);
      return {
        background: 'rgb(' + R + ',' + G + ',' + B + ')'
        };
    },
  }
}
</script>

<style>
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
.f17 {
    font-size: 17px;
    font-family: PingFangSC-Regular, sans-serif;
    color: #fff;
}
.box-card {
  width: 480px;
  margin: 30px;
  line-height: 1.3;
}
</style>
