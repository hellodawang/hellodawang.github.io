<template>
    <div>
        <h3>编辑story</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="需求名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="迭代版本" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择版本">
                <el-option label="六月份版本" value="shanghai"></el-option>
                <el-option label="七月份版本" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="优先级" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择优先级">
                <el-option label="1" value="shanghai"></el-option>
                <el-option label="2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择状态">
                <el-option label="开发中" value="shanghai"></el-option>
                <el-option label="测试中" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="处理人" prop="delivery">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="预计人天">
                <el-input-number v-model="num1" :min="1" :max="10" ></el-input-number>
            </el-form-item>
            <el-form-item label="预计完成日期">
                <el-date-picker  type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="实际完成日期">
                <el-date-picker  type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="需求描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
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