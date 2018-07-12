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
</div>
</template>
<script>
export default {

}
</script>
<style  scoped>

</style>