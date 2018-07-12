<template>
    <div class="defect-wrapper">
        <el-row class="toolbar">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="addDefect">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导出</el-button>
            <el-select  placeholder="请选择版本" size="mini">
                <el-option label="六月份版本" value="shanghai"></el-option>
                <el-option label="七月份版本" value="beijing"></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-search">查询</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="标题" width="180">
            </el-table-column>
            <el-table-column prop="version" label="迭代版本" width="180">
            </el-table-column>
            <el-table-column prop="level" label="严重程度"></el-table-column>
            <el-table-column prop="responsible" label="责任人"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
        </el-table>
        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :total="50">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
          tableData: [{
            title: '风险1',
            version: '迭代1',
            level: '1',
            responsible:'sss',
            createTime:'2018-08-06'
          }, 
          {
            title: '风险1',
            version: '迭代1',
            level: '1',
            responsible:'sss',
            createTime:'2018-08-06'
          },{
            title: '风险1',
            version: '迭代1',
            level: '1',
            responsible:'sss',
            createTime:'2018-08-06'
          },
          {
            title: '风险1',
            version: '迭代1',
            level: '1',
            responsible:'sss',
            createTime:'2018-08-06'
          },]
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