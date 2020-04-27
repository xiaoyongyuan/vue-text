<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%"
        >
            <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="green"
                    label="绿色"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="blue"
                    label="蓝色"
                  >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "dashboard",
        data(){
            return{
                tableData:[]
            }
        },
        mounted() {
          //this.getList();
        },
        methods:{
            getList(){
                axios({
                    methods: "get",
                    url:"http://192.168.1.123:8088/face/api/searchAll"
                }).then((res)=>{
                    this.tableData=res.data.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>