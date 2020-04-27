<template>
    <div class="form">
        <SearchForm :searchList="searchList"  />
    </div>
</template>

<script>
    import SearchForm from "../comm/SearchForm";
    import bus from "../comm/bus";
    import moment from "moment";
    export default {
        name: "form",
        components:{
            SearchForm
        },
        data() {
            return {
                searchList:[
                    {type:"input",label:"订单编号",name:"orderNo"},
                    {type:"input",label:"申请人",name:"applicant",width:"75px"},
                    {type:"date",label:"时间",name:"dates"},
                    {type:"select",label:"处理状态",name:"",
                        options: [
                            {
                            value: '选项1',
                            label: '黄金糕'
                        }, {
                            value: '选项2',
                            label: '双皮奶'
                        }, {
                            value: '选项3',
                            label: '蚵仔煎'
                        }, {
                            value: '选项4',
                            label: '龙须面'
                        }, {
                            value: '选项5',
                            label: '北京烤鸭'
                        }
                        ]
                    }
                ]
            }
        },
        mounted() {
            bus.$on("form",value=>{
                console.log(value.orderNo,value.applicant,value.types)
                console.log(moment(value.dates[0].value).format('YYYY-MM-DD HH:mm:ss'),moment(value.dates[1].value).format('YYYY-MM-DD HH:mm:ss'));
            })
        },
    }
</script>

<style scoped>
    .form{
        margin: 20px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        background:rgba(255,255,255,1);
        border-radius:5px;
    }
</style>