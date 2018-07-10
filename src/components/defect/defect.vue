<template>
    <div class="defect-wrapper">
        <el-row class="toolbar">
            <el-button type="primary" size="mini" icon="el-icon-plus">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导出</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导入</el-button>
            <el-dropdown size="mini" split-button type="primary">
                选择版本
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-input placeholder="请输入内容" size="mini">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="标题" width="180">
            </el-table-column>
            <el-table-column prop="name" label="发现版本" width="180">
            </el-table-column>
            <el-table-column prop="address" label="严重程度"></el-table-column>
            <el-table-column prop="address" label="所属需求"></el-table-column>
            <el-table-column prop="address" label="优先级"></el-table-column>
            <el-table-column prop="address" label="状态"></el-table-column>
            <el-table-column prop="address" label="责任人"></el-table-column>
            <el-table-column prop="address" label="创建人"></el-table-column>
            <el-table-column prop="address" label="创建时间"></el-table-column>
        </el-table>
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
}
</script>
<style  scoped>
    .defect-wrapper{
        height: 100%;
        width: 100%;
    }
    .toolbar{
        padding: 10px;
    }
</style>