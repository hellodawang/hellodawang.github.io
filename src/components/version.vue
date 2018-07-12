<template>
<div>
    <div class="toolbar">
        <el-row>
            <el-col :span='2'>
                <el-button size='mini' @click="addVersion">创建迭代</el-button>
            </el-col>
            <el-col :span='2'>
                <el-button size='mini'>导出迭代</el-button>
            </el-col>
            <el-col :span='2'>               
                <el-select  placeholder="" size="mini" value='shanghai'>
                    <el-option label="当前迭代" value="shanghai"></el-option>
                    <el-option label="未关闭的" value="beijing"></el-option>
                    <el-option label="关闭的" value="beijing"></el-option>
                </el-select>
            </el-col>
        </el-row>
    </div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="version" label="迭代版本" width="180">
        </el-table-column>
        <el-table-column prop="progress" label="版本进度"></el-table-column>
        <el-table-column prop="time" label="时间段"></el-table-column>
        <el-table-column prop="num" label="需求数"></el-table-column>
        <el-table-column prop="defectNum" label="缺陷数"></el-table-column>
    </el-table>
</div>
</template>
<script>
export default {
    data(){
        return {
            tableData:[
                {version:'迭代1',progress:'60%',time:"2018/08/01-2018/09/01",num:7,defectNum:8},
                {version:'迭代2',progress:'60%',time:"2018/08/01-2018/09/01",num:7,defectNum:8},
                {version:'迭代3',progress:'60%',time:"2018/08/01-2018/09/01",num:7,defectNum:8},
                {version:'迭代4',progress:'60%',time:"2018/08/01-2018/09/01",num:7,defectNum:8},
            ]
        }
    },
    methods:{
        addVersion(){
            this.$router.push("addVersion")
        }
   }
}
</script>
<style  scoped>

</style>