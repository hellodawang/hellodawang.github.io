<template>
  <div>
      <div class="toolbar">
          <el-row>
              <el-col :span='2'><el-button size='mini'>新增需求</el-button></el-col>
              <el-col :span='2'><el-button size='mini'>批量导入</el-button></el-col>
          </el-row>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="youxian" label="优先级"></el-table-column>
        <el-table-column prop="version" label="迭代"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="person" label="处理人"></el-table-column>
        <el-table-column prop="start" label="预计开始"></el-table-column>
        <el-table-column prop="end" label="预计结束"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[
                {id:1,title:'登陆',youxian:2,version:'迭代1',status:'open',person:'zhangsan',start:'2018-09-01',end:'2018-10-30'},
                {id:1,title:'登陆',youxian:2,version:'迭代1',status:'open',person:'zhangsan',start:'2018-09-01',end:'2018-10-30'},
                {id:1,title:'登陆',youxian:2,version:'迭代1',status:'open',person:'zhangsan',start:'2018-09-01',end:'2018-10-30'},
                {id:1,title:'登陆',youxian:2,version:'迭代1',status:'open',person:'zhangsan',start:'2018-09-01',end:'2018-10-30'},
                {id:1,title:'登陆',youxian:2,version:'迭代1',status:'open',person:'zhangsan',start:'2018-09-01',end:'2018-10-30'},
            ]
        }
    }
}
</script>

<style>

</style>
