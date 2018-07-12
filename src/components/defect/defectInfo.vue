<template>
    <div>
        <el-steps :active="1"  align-center>
            <el-step title="步骤 1" description="提交"></el-step>
            <el-step title="步骤 2" description="处理"></el-step>
            <el-step title="步骤 3" description="关闭"></el-step>
        </el-steps>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="缺陷名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="迭代版本" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择版本">
                <el-option label="迭代1" value="shanghai"></el-option>
                <el-option label="迭代2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="严重程度" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择严重程度">
                <el-option label="严重" value="shanghai"></el-option>
                <el-option label="提示" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="关联需求" prop="delivery">
                <el-select v-model="ruleForm.region" placeholder="请选择story">
                    <el-option label="需求1" value="shanghai"></el-option>
                    <el-option label="需求2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="缺陷描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="下一状态" prop="desc">
                    <el-radio v-model="radio" label="1">处理</el-radio>
                    <el-radio v-model="radio" label="2">关闭</el-radio>
            </el-form-item>
            
            <el-form-item label="处理人" prop="desc">
                <el-input  v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="处理意见" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">流转</el-button>
                <!-- <el-button @click="resetForm('、ruleForm')">重置</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        num1:1,
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        dialogVisible: false,
        gridData:[{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style  scoped>
    .demo-ruleForm{
        width: 500px;
    }

</style>