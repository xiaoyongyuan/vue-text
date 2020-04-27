<template>
    <div class="tabls">
        <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 80%">
                <el-table-column
                        prop="date"
                        label="日期"
                       >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                       >
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-button @click="handleLook(scope.row,'1')" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="handleLook(scope.row,'2')">编辑</el-button>
                        <el-button @click="hanleDelete(scope.$index)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        <el-dialog :title="modelTitle==='1'?'用户查看':'用户编辑'" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form" ref="ruleForm">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" class="form-input"></el-input>
                </el-form-item>
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="form.date" autocomplete="off" class="form-input"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off" class="form-input"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" v-show="modelTitle==='1'?false:true">
                <el-button @click="hanldClose('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="hanleSure('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "tables",
        data(){
            return{
                loading:true,
                tableData: [
                    {
                    id:1,
                    date: '2016-07-02 19:08',
                    name: '王小虎',
                    address: '广东省广州市海珠区新港东路'
                }, {
                    id:2,
                    date: '2018-05-04 12:09',
                    name: '李华',
                    address: '视联科技园A座(黄埔区科学大道33号'
                }, {
                    id:3,
                    date: '2019-06-23 08::04',
                    name: '王思',
                    address: '吉山幼儿园(天河区珠吉路自编58号)'
                }, {
                    id:4,
                    date: '2019-11-24 22:34',
                    name: '谢晓果',
                    address: '广东省广州市黄埔区禾丰路与永安大道交汇处西北'
                }
                ],
                dialogTableVisible: false,
                dialogFormVisible: false,
                modelTitle:"",
                form: {
                    name: '',
                    date:"",
                    address:""
                },
                formLabelWidth: '90px'
            }
        },
        mounted() {
         setTimeout(()=>{
             this.loading=false;
         },2000)
        },
        methods:{
            handleLook(value,type){
                this.dialogFormVisible = true;
                this.modelTitle=type;
                this.form.name=value.name;
                this.form.date=value.date;
                this.form.address=value.address;
            },
            hanleSure(){
                this.dialogFormVisible = false;

            },
            hanldClose(){
                this.dialogFormVisible = false;
                this.$refs["ruleForm"].resetFields();
            },
            hanleDelete(index){
                this.$confirm("确定要删除吗？","提示",{
                    type:"warning"
                }).then(()=>{
                    this.tableData.splice(index,1);
                    this.$message({
                        message:"删除成功！",
                        type:"success"
                    });
                })
            }
        }
    }
</script>

<style scoped>
    .tabls{
        padding: 20px 20px;
    }
    .form-input{
        width: 300px;
    }
</style>