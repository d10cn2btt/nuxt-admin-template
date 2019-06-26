<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>View</el-dropdown-item>
        <el-dropdown-item>Add</el-dropdown-item>
        <el-dropdown-item>Delete</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>Tom</span>
  </el-header>
</template>

<script>
  export default {
    name: 'TheTopMenu',
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
