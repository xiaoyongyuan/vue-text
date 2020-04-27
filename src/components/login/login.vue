<template>
    <div class="login">
        <el-form :model="params" :rules="rules" ref="login" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户" prop="users">
                <el-input  autocomplete="off" v-model="params.users"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password"  autocomplete="off" v-model="params.pass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="hanleLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                params:{
                    users:"",
                    pass:""
                },
                rules:{
                    users:[{required:true,message:"请输入用户名",trigger:"blur"}],
                    pass:[{required:true,message:"请输入密码",trigger:"blur"}]
                }
            }
        },
        methods:{
            hanleLogin(){
                this.$refs.login.validate(valid=>{
                    if(valid){
                        localStorage.setItem("userNames",this.params.users);
                        this.$router.push('/');
                    }else{
                        this.$message.error("请输入用户名和密码");
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login{
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }
</style>