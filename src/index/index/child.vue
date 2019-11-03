<template>
<div>
  <div class="child">
    <h3>这是一个子组件</h3>
    <div>这是父组件传过来的num值:<span>{{num}}</span></div>
    <div>这是父组件传过来的title值:<span>{{title}}</span></div>
    <div>等待父组件通知触发函数:<span>{{text}}</span></div>
    <el-button v-on:click="changeContent">子组件点击事件,触发父组件方法,向上传值</el-button>
  </div>
</div>
</template>

<script>
    export default {
        name: "child",
        props:{
          num:{
            type:Number,
          },
          title:{
            type:String
          }
        },
      created() {
      },
      mounted() {
      },
      data(){
          return{
            text:''
          }
      },
      methods:{
          clickDom:function(){
            this.text="父组件通知函数"
          },
        changeContent:function(){
           this.$emit('changeContent',{kk:'这里是子传父的数据'})
        }
      }
    }
</script>

<style scoped>
  .child{
    border:1px solid red;
    padding:10px;
  }
  .child span{
    color:red
  }
</style>
