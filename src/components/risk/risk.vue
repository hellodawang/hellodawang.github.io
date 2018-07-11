<template>
    <div class="defect-wrapper">
        <el-row class="toolbar">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="addDefect">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导出</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导入</el-button>
            <el-select  placeholder="请选择版本" size="mini">
                <el-option label="六月份版本" value="shanghai"></el-option>
                <el-option label="七月份版本" value="beijing"></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-search">查询</el-button>
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
    },
    methods:{
        addDefect(){
            this.$router.push({ path: 'addRisk' })
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