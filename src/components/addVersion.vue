
<template>
  <div>
        <h3>新增迭代</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="迭代名称" prop="title">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="迭代描述" prop="title">
                <el-input type='textarea'></el-input>
            </el-form-item>
            <el-form-item label="起始日期" prop="title">
                 <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
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
  data(){
      return{
          title:''
      }
  }
}
</script>

<style>
.demo-ruleForm{
    width: 800px
}
</style>
