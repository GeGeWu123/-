<template>
  <div class="container">
    <div class="title">
      <h1>信息管理与信息系统专业培养方案</h1>
      <span class="title_en">Information Management and Information Systems</span>
      <p>学科门类：管理学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业代码：120102</p>
    </div>
    <div class="content">
      <span class="subtitle">{{educatePlan.trainGoal}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.trainGoalIntroduce}}</p>
      <p>{{educatePlan.trainGoalDetail}}</p>
      <span class="subtitle">{{educatePlan.trainSpecial}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.trainSpecialIntroduce}}</p>
      <span class="subtitle">{{educatePlan.mainCourse}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.mainCourseIntroduce}}</p>
      <span class="subtitle">{{educatePlan.educationalSystem}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.educationalSystemDetail}}</p>
      <span class="subtitle">{{educatePlan.creditRequirment}}</span>
      <pre>
    本专业要求学生修满指导性教学计划中规定的课程总学分160学分和各模块应修学分，方准毕业，其中：

1．通识课程55学分，占总学分的34.38%，其中，通识必修课37学分，选修课18学分，需修满每个模块要求的最低学分。

2．学科基础课程42学分，占总学分的26.25%。

3．专业课程45学分，占总学分的28.12%，其中，专业必修课22学分，专业选修课需修读23学分。

4．独立设置的实践教学环节18学分，占总学分的11.25%。</pre>
      <span class="subtitle">{{educatePlan.conferDegree}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.conferDegreeIntroduce}}</p>
    </div>
  </div>
</template>

<script>
import { getEducatePlan } from '@/api/educatePlan'

export default {
  data() {
    return {
      educatePlan: {}
    }
  },
  created() {
    this.handleEducatePlan()
  },
  methods: {
    handleEducatePlan() {
      getEducatePlan().then(res => {
        console.log(res,'getEducatePlan-res');
        this.educatePlan = res.data;

      })
    }
  }
}
</script>

<style lang="scss">
.ml30{
  margin-left: 30px;
}
.m50{
  margin: 50px
}
.container {
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title_en {
      font-size: 24px;
    }
  }
  .content {
    margin: 30px;
    .subtitle {
      font-size: 24px;
    }
  }
}
</style>
