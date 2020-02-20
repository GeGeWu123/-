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
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.creditRequirementDetail}}</p>
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
    console.log(this.$route.query.grade, '传参grade');
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
