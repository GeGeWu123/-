<template>
  <div class="container">
    <div class="title">
      <h1>信息管理与信息系统专业培养方案</h1>
      <span class="title_en">Information Management and Information Systems</span>
      <p>学科门类：管理学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业代码：120102</p>
    </div>
    <div class="content">
      <!-- 一、专业培养目标和培养要求 -->
      <span class="subtitle">{{educatePlan.trainGoal}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.trainGoalIntroduce}}</p>
      <!-- 二、专业培养特色 -->
      <span class="subtitle">{{educatePlan.trainSpecial}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.trainSpecialIntroduce}}</p>
      <!-- 三、主干学科与核心课程 -->
      <span class="subtitle">{{educatePlan.mainCourse}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.mainCourseIntroduce}}</p>
      <!-- 四、修业年限 -->
      <span class="subtitle">{{educatePlan.educationalSystem}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.educationalSystemDetail}}</p>
      <!-- 五、毕业学分标准 -->
      <span class="subtitle">{{educatePlan.creditRequirment}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.creditRequirementIntroduce}}</p>
      <!-- 六、学位授予 -->
      <span class="subtitle">{{educatePlan.conferDegree}}</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{educatePlan.creditRequirementIntroduce}}</p>
    </div>
  </div>
</template>

<script>
import { findTrainProgramById } from '@/api/educatePlan'


export default {
  data() {
    return {
      educatePlan: {},
      keyId: ''
    }
  },
  created() {
    this.keyId = this.$route.query.keyId;
    console.log(this.$route.query.keyId, '传参keyId');
    this.findPlanById()
  },
  methods: {
    findPlanById() {
      findTrainProgramById(this.keyId).then(res => {
        console.log(res, 'res')

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
