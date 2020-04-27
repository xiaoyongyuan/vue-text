<template>
    <div class="container">
        <div class="schart-box">
            <div class="content-title">柱形图</div>
            <schart class="charts" canvasId="bar" :options="options1" />
        </div>
        <div class="schart-box">
            <div class="content-title">折线</div>
            <schart class="charts" canvasId="line" :options="options2" />
        </div>
    </div>
</template>

<script>
    import Schart from "vue-schart";
    export default {
        name: "charts",
        data(){
            return{
                options1: {
                    type: 'bar',
                    title: {
                        text: '最近一周各品类销售图'
                    },
                    bgColor: '#fbfbfb',
                    labels: ['周一', '周二', '周三', '周四', '周五'],
                    datasets: [
                        {
                            label: '家电',
                            fillColor: 'rgba(241, 49, 74, 0.5)',
                            data: [234, 278, 270, 190, 230]
                        },
                        {
                            label: '百货',
                            data: [164, 178, 190, 135, 160]
                        },
                        {
                            label: '食品',
                            data: [144, 198, 150, 235, 120]
                        }
                    ]
                },
                options2:{
                    type:"line",
                    title:{
                        text:"最近几个月各类品销售趋势图"
                    },
                    bgColor:"#fbfbfb",
                    labels:["6月","7月","8月","9月","10月"],
                    datasets:[
                        {
                            data: [234, 278, 270, 190, 230]
                        }
                    ]
                }
            }
        },
        components:{
            Schart
        },
    }
</script>

<style scoped>
    .container{
        display: flex;
    }
    .schart-box{
        display: inline-block;
        margin: 20px;
    }
    .charts{
        width: 600px;
        height:400px
    }
    .content-title {
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
</style>