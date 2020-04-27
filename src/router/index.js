import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path:"/",
            component:()=>import("../components/main/index"),
            children:[
                {
                    path:"/dashboard",
                    component:()=>import("../components/page/dashboard"),
                    meta:{title:"系统首页"}
                },
                {
                    path:"/table",
                    component:()=>import("../components/page/tables"),
                    meta:{title:"基础表格"}
                },
                {
                    path:"/tabs",
                    component:()=>import("../components/page/tabs"),
                    meta:{title:"tab选项卡"}
                },
                {
                    path:"/form",
                    component:()=>import("../components/page/form"),
                    meta:{title:"表单"}
                },
                {
                    path:"/upload",
                    component:()=>import("../components/page/upload"),
                    meta:{title:"文件上传"}
                },
                {
                    path:"/charts",
                    component:()=>import("../components/page/charts"),
                    meta:{title:"schart图表"}
                },
                {
                    path:"/i18n",
                    component:()=>import("../components/page/il8n"),
                    meta:{title:"国际化"}
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
            ]
        },
        {
            path:"/login",
            component:()=>import("../components/login/login.vue"),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})