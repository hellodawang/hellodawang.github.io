<template>   
    <div class="sss">
        <div class="tool">
            <el-row>
                <el-col :span="4">
                    <!-- 迭代版本 -->
                    <el-select  placeholder="请选择迭代版本" size="mini">
                        <el-option label="迭代1" value="shanghai"></el-option>
                        <el-option label="迭代2" value="beijing"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <!-- 优先级 -->
                    <el-select  placeholder="请选择优先级" size="mini">
                        <el-option label="1" value="shanghai"></el-option>
                        <el-option label="2" value="beijing"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <!-- 处理人 -->
                    <el-select  placeholder="处理人" size="mini">
                        <el-option label="张三" value="shanghai"></el-option>
                        <el-option label="李四" value="beijing"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="2">
                    <el-button icon="el-icon-search" size='mini'>搜索</el-button>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px">
                <el-col :span='2'><el-button size='mini'  icon="el-icon-plus" @click="addStory">新增story</el-button></el-col>
                <!-- <el-col :span='2'><el-button size='mini' icon="el-icon-upload2">story导入</el-button></el-col> -->
            </el-row>
        </div>
        <div class="ggg">
            <div class="item-container">
                <h3>需求分析中</h3>
                <draggable v-model="tags" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                    <transition-group class="drag-animate">                   
                        <div v-for="element in tags" :key="element.id" class="item" @click="showDetail">
                            <div class="item-title">{{element.name}}</div>
                            <div class="item-info">
                                <span class="priority one"></span>
                                <div class="item-avator">
                                    <img src="../../assets/logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div> 
            <div class="item-container">
                <h3>待开发</h3>
                <draggable v-model="arr" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                    <transition-group class="drag-animate">
                        <div v-for="element in arr" :key="element.id" class="item">
                            <div class="item-title">{{element.name}}</div>
                            <div class="item-info">
                                <span class="priority two"></span>
                                <div class="item-avator">
                                    <img src="../../assets/logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div>
            <div class="item-container">
                <h3>开发中</h3>
                <draggable v-model="arr1" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                    <transition-group class="drag-animate">
                        <div v-for="element in arr1" :key="element.id" class="item">
                            <div class="item-title">{{element.name}}</div>
                            <div class="item-info">
                                <span class="priority three"></span>
                                <div class="item-avator">
                                    <img src="../../assets/logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div> 
            <div class="item-container">
                <h3>测试中</h3>
                <draggable v-model="arr2" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                    <transition-group class="drag-animate">
                        <div v-for="element in arr2" :key="element.id" class="item">
                            <div class="item-title">{{element.name}}</div>
                            <div class="item-info">
                                <span class="priority one"></span>
                                <div class="item-avator">
                                    <img src="../../assets/logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div>
            <div class="item-container">
                <h3>完成</h3>
                <draggable v-model="arr3" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                    <transition-group class="drag-animate">
                        <div v-for="element in arr3" :key="element.id" class="item">
                            <div class="item-title">{{element.name}}</div>
                            <div class="item-info">
                                <span class="priority one"></span>
                                <div class="item-avator">
                                    <img src="../../assets/logo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </draggable>
            </div> 
        </div>                      
    </div>  
</template>
<script>
import draggable from 'vuedraggable'
export default {
    components: {
            draggable,
        },
    data(){
        return{
            tags:[{id:1,name:'测试需要测试需要测试需要测试需要'},{id:2,name:'需求2'},{id:3,name:'需求3'}],
            arr:[{id:5,name:'需求4'},{id:6,name:'需求5'},{id:7,name:'需求6'}],
            arr1:[{id:8,name:'需求7'},{id:11,name:'需求8'},{id:14,name:'需求9'}],
            arr2:[{id:9,name:'需求10'},{id:12,name:'需求5'},{id:15,name:'需求6'}],
            arr3:[{id:10,name:'需求4'},{id:13,name:'需求5'},{id:16,name:'需求6'}],
            detailShow:true
        }
    },
    methods: {
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags)
      },
      showDetail(){
        //   路由跳转
        this.$router.push('editStory')
      },
      addStory(){
         this.$router.push('addStory') 
      }
    }
}
</script>
<style  scoped>
    .priority{
        float: left;
        width: 10px;
        height: 10px;
    }
    .priority.one{
        background-color: #f56c6c;
    }
    .priority.two{
        background-color: #e6a23c;
    }
    .priority.three{
        background-color: #409eff;
    }
    .item-info{
        height: 30px;
        margin-top: 10px;
        padding: 0 10px;
    }
    .item-avator{
        float: right;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .item-avator img{
        width: 100%;
    }
    .item-title{
        font-size: 14px;
        line-height: 1.4em;
        height: 40px;
        word-wrap:break-word;
    }
    .tool{
        height: 80px;
        background-color: #fff;
        margin-left: 10px;
        padding: 10px 20px;
        /* display: flex; */
    }
    .item{
        height: 80px;
        background-color: #f0f0f0;
        border-radius: 4px;
        margin-top: 20px;
    }
    .ggg{
        height: 100%;
        display: flex;
    }
    .item-container{
        width: 220px;
        border:1px solid #ccc;
        /* float: left; */
         margin-top:10px;
        margin-left: 10px;
        background-color: #fff;
        height: 100%;
        text-overflow: ellipsis;
        flex: 1;
        padding: 10px;
    }
    .sss{
            position: absolute;
            top: 0px;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            background-color: #f0f0f0;
            padding: 10px;
    }
    .drag{
        height: 100%;
    }
    .drag-animate{
        height: 100%;
        display: block
    }
</style>