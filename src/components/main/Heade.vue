<template>
    <div class="headers">
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold" />
            <i v-else class="el-icon-s-unfold" />
        </div>
        <div class="logo"></div>
        <div class="header-right">
            <div class="header-user-con">
                <!--全屏-->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank" />
                    </el-tooltip>
                </div>
                <!--消息中心-->
                <div class="btn-bell">
                    <el-tooltip
                            effect="dark"
                            :content="message?`有${message}条未读消息`:`消息中心`"
                            placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell" />
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message" />
                </div>
                <!--用户头像-->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!--用户下拉菜单-->
                <el-dropdown  @command="hanleGoOut">
                    <span class="el-dropdown-link">
                        {{userName}}
                        <i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>用户中心</el-dropdown-item>
                        <el-dropdown-item divided command="loginout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import screenfull from 'screenfull'
    import bus from "../comm/bus";
    export default {
        name: "headers",
        data(){
            return{
                collapse:false,
                fullscreen:false,
                message:2
            }
        },
        computed:{
            userName(){
                let username=localStorage.getItem("userNames");
                return username;
            }
        },
        methods:{
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            hanleGoOut(command){
                if (command == 'loginout') {
                    this.$router.push('/login');
                }
            },
            handleFullScreen(){
                this.fullscreen = !this.fullscreen;
                screenfull.toggle();
            }
        }
    }
</script>

<style scoped>
    .headers {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        background-color: #242f42;
    }
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }
    .header-right {
        float: right;
        padding-right: 50px;
    }
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell,
    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell {
        color: #fff;
    }
    .user-name {
        margin-left: 10px;
    }
    .user-avator {
        margin-left: 20px;
    }
    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
</style>