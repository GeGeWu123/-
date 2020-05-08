<template>
  <div class="row wrap">
    <el-card :style="randomRgb()" class="box-card" v-for="(item, index) in jobList" :key="index">
      <div slot="header" class="clearfix">
        <span class="f24">{{ item.jobName }}</span>
        <!-- <el-button plain style="float: right; padding: 7px 6px">相关招聘</el-button> -->
      </div>
      <div class="f14 item">
        <p>
          <span class="f17">工作内容：</span>
          {{ item.jobContent }}
        </p>
        <p>
          <span class="f17">岗位要求：</span>
          {{ item.jobRequire }}
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { queryJob } from '@/api/educateDirection'
export default {
  data() {
    return {
      liuchengId: '',
      jobList: ''
    }
  },
  created() {
    this.liuchengId = this.$route.query.keyId;
    console.log(this.liuchengId, 'liuchengId');
    this.findJob();
  },
  methods: {
    randomRgb() {
      let R = Math.floor(Math.random() * 130+110);
      let G = Math.floor(Math.random() * 130+110);
      let B = Math.floor(Math.random() * 130+110);
      return {
        background: 'rgb(' + R + ',' + G + ',' + B + ')'
        };
    },
    findJob() {
      queryJob(this.liuchengId).then(res => {
        this.jobList = res.data;

      })
    }
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
