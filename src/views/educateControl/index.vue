<template>
  <div class="container">
    <div class="title">
      <h1>信息管理与信息系统专业培养方案</h1>
      <span class="title_en">Information Management and Information Systems</span>
      <p>学科门类：管理学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业代码：120102</p>
    </div>
    <div class="content">
      <span class="subtitle">一、专业培养目标和培养要求</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;本专业培养学生具有扎实的管理学、经济学、计算机科学的理论基础，掌握计算机应用、定量分析理论及方法、信息系统分析与设计及信息管理等方面的知识与能力，能在国家各级行政机构、工商企业、金融机构、管理咨询机构、科研单位等部门承担信息系统规划、建设和管理以及信息资源开发利用等工作，具备良好的人文素养和科学精神，基础扎实、知识面宽、适应能力强、富有实践能力和创新精神的应用型高级专门人才。</p>
      <pre>
    学生应获得以下几方面的知识和能力：

1．掌握信息管理与信息系统的基本理论、基本知识；

2．掌握信息系统的分析方法、设计方法和实现技术；

3．针对企业所面临的挑战，提出基于信息技术/信息系统的组织与管理的解决方案和信息系统开发与应用的能力；

4．具有信息系统的实施管理、评价、监理以及信息组织与分析等方面的能力；

5．具有较高的外语水平，了解本专业相关领域的发展动态，能适应信息技术、经济管理理论与方法发展的要求；

6．掌握文献检索、资料查询、收集的基本方法，具有初步的科学研究和实际工作的能力。
      </pre>
      <span class="subtitle">二、专业培养特色</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;信息管理与信息系统专业秉承“育人为本、知行合一”的建设理念，以社会需求为导向，坚持开放式办学，创新人才培养模式，追求学生的个性发展和全面发展，同时瞄准社会需求的新变化，坚持产学研合作培养人才，具有“开放、先进、重实践”的鲜明特色。</p>
      <span class="subtitle">三、主干课程</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;Java语言、数据结构、数据库原理与应用、管理信息系统、面向对象的系统分析与设计、信息经济学、信息资源管理、计算机网络、大数据分析与预测技术等。</p>
      <span class="subtitle">四、学制</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;本科标准学制为4年。根据学校学分制管理规定，实行3-8年弹性学制，学生可提前1年或延长2年毕业。</p>
      <span class="subtitle">五、毕业学分要求</span>
      <pre>
    本专业要求学生修满指导性教学计划中规定的课程总学分160学分和各模块应修学分，方准毕业，其中：

1．通识课程55学分，占总学分的34.38%，其中，通识必修课37学分，选修课18学分，需修满每个模块要求的最低学分。

2．学科基础课程42学分，占总学分的26.25%。

3．专业课程45学分，占总学分的28.12%，其中，专业必修课22学分，专业选修课需修读23学分。

4．独立设置的实践教学环节18学分，占总学分的11.25%。</pre>
      <span class="subtitle">六、学位授予</span>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;按要求完成学业，达到毕业学分要求，并符合学士学位授予条件者，授予管理学学士学位。</p>
    </div>
  </div>
</template>

<script>
import { getEducatePlan } from '@/api/educatePlan'

export default {
  data() {
    return {
    }
  },
  created() {
    this.handleEducatePlan()
  },
  methods: {
    handleEducatePlan() {
      getEducatePlan().then(res => {
        console.log(res,'getEducatePlan-res')
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
