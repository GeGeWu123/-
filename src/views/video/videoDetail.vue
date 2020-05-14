<template>
  <div class="container">
    <video class="m50" width="1000" height="" controls="controls" autoplay="autoplay">
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { getById } from '@/api/video'
export default {
  data() {
    return {
      videoUrl: '',
    }
  },
  created() {
    this.videoUrl = this.$route.query.videoUrl;
    console.log(this.$route.query.videoUrl, 'videoUrl');
    // this.findPlanById()
  },
  methods: {
    findPlanById() {
      getById(this.keyId).then(res => {
        this.videoUrl = res.data.videoUrl;
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
