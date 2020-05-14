<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="fileName"
      label="视频名称"
      width="">
    </el-table-column>
    <el-table-column
      prop="fileOperate"
      label="上传者"
      width="">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="上传时间"
      width="">
    </el-table-column>
    <!-- <el-table-column
      prop="videoUrl"
      label="视频地址">
    </el-table-column> -->
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="toPlay(scope.$index, scope.row)">播放</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { videoList } from '@/api/video'
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.findVideo();
    },
    methods: {
      findVideo() {
        videoList().then(res => {
          this.tableData = res.data;
        })
      },
      toPlay(index,row) {
        this.$router.push({path: '/video/videoDetail', query: {videoUrl: row.videoUrl}})
      }
    }
  }
</script>
<style lang="scss">

</style>
