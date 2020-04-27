<template>
    <div class="index">
        <Heade />
        <Sider />
        <div class="content-box" :class="{'content-collapse':collapse}">
            <Tag />
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view />
                    </keep-alive>
                </transition>
                <el-backtop target=".content" />
            </div>
        </div>
    </div>
</template>

<script>
import Heade from "./Heade.vue";
import Sider from "./sider.vue";
import Tag from "../comm/tag";
import bus from "../comm/bus";
export default {
  name: 'index',
  data(){
    return {
        tagsList: [],
        collapse: false
    }
  },
  components:{
      Heade,
      Sider,
      Tag
  },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        /*bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });*/
    }
}
</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .content-box {
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
    }
    .content-collapse {
        left: 65px;
    }
</style>
