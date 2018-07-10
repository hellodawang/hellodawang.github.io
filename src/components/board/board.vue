<template>
    <div class="sss">
        <div class="item-container">
            <h3>需求分析中</h3>
            <draggable v-model="tags" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                <transition-group class="drag-animate">                   
                    <div v-for="element in tags" :key="element.id" class="item">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
        </div> 
        <div class="item-container">
            <h3>待开发</h3>
            <draggable v-model="arr" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                <transition-group class="drag-animate">
                    <div v-for="element in arr" :key="element.id" class="item">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
        </div>
        <div class="item-container">
            <h3>开发中</h3>
            <draggable v-model="arr1" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                <transition-group class="drag-animate">
                    <div v-for="element in arr1" :key="element.id" class="item">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
        </div> 
        <div class="item-container">
            <h3>测试中</h3>
            <draggable v-model="arr2" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                <transition-group class="drag-animate">
                    <div v-for="element in arr2" :key="element.id" class="item">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
        </div>
        <div class="item-container">
            <h3>完成</h3>
            <draggable v-model="arr3" :move="getdata" @update="datadragEnd" :options="{group:'people'}" class="drag">
                <transition-group class="drag-animate">
                    <div v-for="element in arr3" :key="element.id" class="item">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
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
            tags:[{id:1,name:'需求2'},{id:2,name:'需求1'},{id:3,name:'需求3'}],
            arr:[{id:5,name:'需求4'},{id:6,name:'需求5'},{id:7,name:'需求6'}],
            arr1:[{id:8,name:'需求4'},{id:11,name:'需求5'},{id:14,name:'需求6'}],
            arr2:[{id:9,name:'需求4'},{id:12,name:'需求5'},{id:15,name:'需求6'}],
            arr3:[{id:10,name:'需求4'},{id:13,name:'需求5'},{id:16,name:'需求6'}],
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
      }
    }
}
</script>
<style  scoped>
    .item{
        width: 200px;
        height: 80px;
        background-color: #fff;
        border-radius: 4px;
        margin-top:10px;
        margin-left: 10px;
       
    }
    .item-container{
        width: 220px;
        border:1px solid #ccc;
        float: left;
         margin-top:10px;
        margin-left: 10px;
        background-color: #f0f0f0;
        height: 100%;
        text-overflow: ellipsis
    }
    .sss{
            position: absolute;
            top: 0px;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
    }
    .drag{
        height: 100%;
    }
    .drag-animate{
        height: 100%;
        display: block
    }
</style>