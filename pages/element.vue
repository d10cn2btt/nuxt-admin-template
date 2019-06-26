<template>
  <el-container direction="vertical">
    <the-top-menu/>
    <el-container>
      <the-aside/>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import TheAside from '~/components/TheAside.vue'
  import TheTopMenu from '~/components/TheTopMenu.vue'

  export default {
    components: {
      TheAside, TheTopMenu
    },
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
