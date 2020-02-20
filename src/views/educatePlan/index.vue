<template>
  <div class="table">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="grade"
        label="年级"
        width="180">
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
export default {
  data() {
    return {
      tableData: [{
        grade: '一六级',
      }, {
        grade: '一七级',
      }, {
        grade: '一八级',
      }, {
        grade: '一九级',
      }]
    }
  },
  created() {
  },
  methods: {
    handleQuery(index, row) {
      console.log(index, row, 'index+row');
      var grade = row;
          // this.$router.push({path: '/versions/versionadd',query:{id:id,name:name,url:url}});
      this.$router.push({path: '/educatePlan/educatePlanDetail', query: {grade: grade}});
    }
  }
}
</script>

<style lang="scss">
.table{
    margin: 111px 300px;
    width: 373px;
}
</style>
