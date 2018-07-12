<template>
    <div class="defect-wrapper">
        <el-row class="toolbar">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="addDefect">新增</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导出</el-button>
            <el-button type="primary" size="mini" icon="el-icon-printer">导入</el-button>
            <el-select  placeholder="迭代版本" size="mini">
                <el-option label="六月份版本" value="shanghai"></el-option>
                <el-option label="七月份版本" value="beijing"></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-search">查询</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="标题" width="180" >
                <template slot-scope="scope">
                    <a @click="showDetail" class="title">
                     {{scope.row.title}}   
                    </a>
                </template>
            </el-table-column>
            <el-table-column prop="version" label="迭代版本" width="180">
            </el-table-column>
            <el-table-column prop="defectLevel" label="缺陷等级"></el-table-column>
            <el-table-column prop="story" label="关联story"></el-table-column>
            <el-table-column prop="priority" label="优先级"></el-table-column>
            <el-table-column prop="defectStatus" label="缺陷状态"></el-table-column>
            <el-table-column prop="responsible" label="责任人"></el-table-column>
            <el-table-column prop="creator" label="创建人"></el-table-column>
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
            title: '登录功能',
            version: '迭代1',
            defectLevel: '严重',
            story:'story1',
            priority:1,
            defectStatus:'待验证',
            responsible:'张三',
            creator:'李四',
            createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待分配',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            },{
                title: '登录功能',
                version: '迭代1',
                defectLevel: '严重',
                story:'story1',
                priority:1,
                defectStatus:'待验证',
                responsible:'张三',
                creator:'李四',
                createTime:'2018-06-01',
            }]
        }
    },
    methods:{
        addDefect(){
            this.$router.push({ path: 'addDefect' })
        },
        showDetail(){
            this.$router.push({ path: 'defectInfo' })
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
    .title{
        cursor: pointer;
    }
</style>