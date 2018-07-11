<template>
    <div>
        <h3>新增缺陷</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="缺陷名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="发现版本" prop="region">
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
            <el-form-item label="严重等级" prop="region">
                <el-radio-group v-model="ruleForm.type">
                <el-radio label="严重" name="type"></el-radio>
                <el-radio label="一般" name="type"></el-radio>
                <el-radio label="警告" name="type"></el-radio>
                <el-radio label="提示" name="type"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="处理人" prop="delivery">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="关联需求" prop="delivery">
                <el-button icon="el-icon-search" circle size='mini' @click="dialogVisible = true"></el-button>
            </el-form-item>
            <el-form-item label="缺陷描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 弹出框 -->
        <el-dialog
            title="需求关联"
            :visible.sync="dialogVisible"
            width="30%">
            <el-table :data="gridData">
                <el-table-column  width="55">
                    <template slot-scope="scope">
                        <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.$index)"></el-radio>
                    </template>
                </el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
            <el-button type="primary" >确定</el-button>
        </el-dialog>
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