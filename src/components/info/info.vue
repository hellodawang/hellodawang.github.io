<template>
    <div class="info-wrapper">
        <div>当前版本：七月份版本</div>
        <!-- 基本信息 -->
        <div class="general">
            <div class="general-health">
                <h3>项目健康度</h3>
                <div class="health-circle-wrapper">
                    <div class="health-circle">
                        <span>100</span>
                    </div>
                </div>
                <p>你的项目很健康</p>
            </div>
            <div class="general-progress">
                <h3>项目进度</h3>
                <div id="mychart"></div>
                <!-- <div id="fenbu"> -->
            </div>
            <div class="general-defect">
                <h3>缺陷率</h3>
                <div id="defect"></div>
            </div>
            <div class="general-risk">
                <h3>风险top3</h3>
                <ul id="defect">
                    <li>风险2</li>
                    <li>风险3</li>
                    <li>风险1</li>
                </ul>
            </div>
        </div>
        <div class="middle-wrapper">
            <!-- 项目进度分布 -->
            <div class="progress">
                <h3>项目进度分布</h3>
                <div id="fenbu">

                </div>
            </div>
            <div class="defect-level">
                <h3>缺陷严重等级分布</h3>
                <div id="defect">

                </div>
            </div>
            <div class="progress">
                <h3>里程碑</h3>
            </div>
        </div>
        <div class="footer-wrapper">
            <div>
                <h3>各个版本缺陷率分布</h3>   
            </div>
            <div>
                <h3>各个版本缺陷率分布</h3>   
            </div>

        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$nextTick(() => { 
            let mychart = this.$echarts.init(document.getElementById('mychart'))
            var option = {
                backgroundColor:'#FFF',
                color:['#38a8da','#d4effa'],
                title: {
                    text: 'title',
                    top:'3%',
                    left:'1%',
                    textStyle:{
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 16,
                    }
                },
                series: [{
                    // name: '来源',
                    type: 'pie',
                    radius: ['60%', '75%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 'bold'
                            },
                            formatter:'{b}\n{c}%'
                        }
                    },
                    data: [{
                            value: 20,
                            // name: '项目进度',
                            label:{
                                normal:{
                                    show:true
                                }
                            }
                        },
                        {
                            value: 80,
                            name: ''
                        }
                    ]
                }]
            };
            mychart.setOption(option)
            let defect = this.$echarts.init(document.getElementById('defect'))
            var option1 = {
                backgroundColor:'#FFF',
                color:['#38a8da','#d4effa'],
                title: {
                    text: 'title',
                    top:'3%',
                    left:'1%',
                    textStyle:{
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 16,
                    }
                },
                series: [{
                    // name: '来源',
                    type: 'pie',
                    radius: ['60%', '75%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 'bold'
                            },
                            formatter:'{b}\n{c}%'
                        }
                    },
                    data: [{
                            value: 20,
                            // name: '项目进度',
                            label:{
                                normal:{
                                    show:true
                                }
                            }
                        },
                        {
                            value: 80,
                            name: ''
                        }
                    ]
                }]
            };
            defect.setOption(option1)
            let option2 = {
                title : {
                    text: '同名数量统计',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data: [
                        {name: 'A', value: 1212},
                        {name: 'B', value: 2323},
                        {name: 'C', value: 1919}
                    ],
                    // selected: data.selected
                },
                series : [
                    {
                        name: '姓名',
                        type: 'pie',
                        radius : '55%',
                        center: ['40%', '50%'],
                         data: [
                            {name: 'A', value: 1212},
                            {name: 'B', value: 2323},
                            {name: 'C', value: 1919}
                        ],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                    }
                ],
            };
            this.$echarts.init(document.getElementById('fenbu')).setOption(option2)
        })
       
    },
}
</script>
<style  scoped>
.info-wrapper{
    background-color: #f0f0f0;
    height: 100%;
}
    .general{
        display: flex;
        height: 200px;
    }
    .general>div{
        flex: 1;
        background-color: #fff;
        margin: 10px 0 0 10px;
        border-radius: 4px;
    }
    .health-circle-wrapper{
        width: 120px;
        height: 120px;
        border:4px dashed green;
        border-radius: 50%;
        margin: 0 auto;
    }
    .health-circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: green;
        line-height: 100px;
        color: #fff;
        text-align: center;
        font-size: 40px;
        margin: 5px auto;
    }
    #mychart{
        height: 150px;
    }
    #defect{
        height: 150px;
    }
    #fenbu{
        height: 200px;
    }
    .middle-wrapper{
        display: flex;
    }
    .middle-wrapper>div{
        flex: 1;
        background-color: #fff;
        height: 250px;
        margin: 10px 0 0 10px;
        border-radius: 4px;
    }
    .footer-wrapper{
        height: 400px;
        
        display: flex;
    }
    .footer-wrapper>div{
        flex: 1;
        margin: 10px 0 0 10px;
        background-color: #fff;
    }
</style>