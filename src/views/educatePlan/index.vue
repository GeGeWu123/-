<template>
  <div class="table">
    <el-table
      :data="planData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="grade"
        label="版本"
        width="">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更新时间"
        width="">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleQuery(scope.$index, scope.row)">查询</el-button>
        </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { initTrainProgram } from '@/api/educatePlan'
export default {
  data() {
    return {
      planData: []
    }
  },
  mounted() {
    this.getPlan();
  },
  methods: {
    getPlan() {
      initTrainProgram().then(res => {
        this.planData = res.data;
      })
    },
    handleQuery(index, row) {
      console.log(index, row, 'index+row');
      var keyId = row.keyId;
      this.$router.push({path: '/educatePlan/educatePlanDetail', query: {keyId: keyId}});
    }
  }
}
</script>

<style lang="scss">
.table{
    margin: 10px 10px;
}
</style>
