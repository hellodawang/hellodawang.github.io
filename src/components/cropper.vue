<template>
<div class="box">
    <div class="wrapper">
        <div class="cropper-wrapper">
            <vue-cropper ref="cropper" :img="option.img"  :outputType="option.outputType" @realTime="realTime" :autoCrop='option.autoCrop' :fixedBox='option.fixedBox' :full='option.full' :autoCropWidth='option.autoCropWidth'
		:autoCropHeight='option.autoCropHeight'></vue-cropper>
            <div class="upload-wrapper">
                <el-upload
                    class="upload-demo"
                    :auto-upload="false"
                    :show-file-list ='false'
                    :on-change='ss'
                    full='true'
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/">   
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>             
                    <el-button icon="el-icon-minus" circle size="mini" @click="minus"></el-button>
                    <el-button icon="el-icon-plus" circle size="mini" @click="plus"></el-button>
                    <el-button icon="el-icon-refresh" circle size="mini"></el-button>
                </el-upload>
            </div>
        </div>
        <!-- 图片预览 -->
        <div class="preview-wrapper">
            <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden',
                'margin': '5px'}">
                <div :style="previews.div">
                    <img :src="option.img" :style="previews.img">
                </div>
            </div>  
            <p>头像预览</p> 
        </div>      
    </div>
    <div style="height:10px"></div>
    <div>
        <el-button  size="small" type="primary" @click="submit">确定</el-button>
        <el-button>取消</el-button>
    </div>
</div>

    
</template>
<script>
import vueCropper from 'vue-cropper'
export default {
    components:{
        vueCropper
    },
    data(){
        return{
            option: {
                img: '',
                size: 1,
                full: true,
                outputType: 'png',
                canMove: true,
                original: false,
                canMoveBox: false, 
                autoCrop:true,
                fixedBox:true,
                autoCropWidth:300,
                autoCropHeight:300
            },
            previews:{

            }
        }
    },
    methods:{
        ss:function(file){
            // 判断一下是否是刚添加文件的时候
            if(file.status =='ready'){
                // 将拿到的文件渲染到cropper组件里面
                this.option.img = file.url
            }
        },
        submit(){
            this.$refs.upload.submit();
        },
        realTime (data) {
            this.previews = data
        },
        minus(){
            this.$refs.cropper.changeScale(-1) 
        },
        plus(){
           this.$refs.cropper.changeScale(1) 
        }
    }
}
</script>
<style  scoped>
.box{
    width: 500px;
    height: 500px;
    border:1px solid #ccc;
    padding: 10px;
}
.wrapper{
    height: 350px;
}
    .cropper-wrapper{
        height:300px;
        width: 300px;
        float: left;
    }
    .upload-wrapper{
        margin-top: 20px
    }
    .show-preview{
        transform: scale(0.5);
        border: 1px solid #666;
        /* display: inline-block; */
        /* float: left; */
    }
    .preview-wrapper{
        float: left;
    }
    .upload-demo{
        width: 300px;
        height: 300px;
    }

</style>