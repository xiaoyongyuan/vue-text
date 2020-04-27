<template>
    <el-form :inline="true" ref="selectForm" :model="form">
        <el-form-item v-for="item in searchList" :key="item.name" :label="item.label"  >
            <el-input v-if="item.type==='input'" v-model="form[item.name]">{{item.value}}</el-input>
            <el-date-picker
                    v-if="item.type==='date'"
                    v-model="form[item.name]"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
            </el-date-picker>
            <el-select
                    v-if="item.type==='select'"
                    v-model="form[item.name]"
                    placeholder="请选择">
                <el-option
                        v-for="optionItem in item.options"
                        :key="optionItem.value"
                        :label="optionItem.label"
                        :value="optionItem.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import bus from "../comm/bus";
    export default {
        name: "Form",
        props:["searchList"],
        data(){
            return{
                form:{}
            }
        },
        mounted() {

        },
        methods:{
            onSubmit(){
                this.$refs.selectForm.validate(()=>{
                    bus.$emit("form",this.form);
                })
            }
        }
    }
</script>

<style scoped>

</style>