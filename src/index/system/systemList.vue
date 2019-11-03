<template>
  <div>
    <div class="main_title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/iii' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h3>活动详情</h3>
    </div>
    <div style="margin:30px;background: white;padding:40px">
      <div style="display:flex">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable>
        </el-input>
        <el-button type="primary">搜索</el-button>
        <el-button>默认按钮</el-button>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "systemList.vue",
      data(){
          return{
            input:''
        }
      }
    }
</script>

<style scoped>
  .main_title{
    padding:20px 20px;
    color:#606266;
    background:white;
    border-top:1px solid #e0e0e0;

  }
  h3{
    margin-bottom:0;
  }
</style>
