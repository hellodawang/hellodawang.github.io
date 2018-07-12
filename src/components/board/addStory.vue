<template>
    <div>
        <h3>新增需求</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="需求名称" prop="title">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="需求描述" prop="title">
                <el-input type='textarea'></el-input>
            </el-form-item>
            <el-form-item label="迭代" prop="region">
                <el-select  placeholder="请选择迭代版本">
                    <el-option label="迭代1" value="shanghai"></el-option>
                    <el-option label="迭代2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="优先级" prop="region">
                <el-select  placeholder="请选择优先级">
                    <el-option label="1" value="shanghai"></el-option>
                    <el-option label="2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="处理人">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="预计完成时间">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
                <el-button >取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {

}
</script>
<style  scoped>
    .demo-ruleForm{
        width: 800px;
    }
</style>