<template>
<div>
  <div>这是一个新的页面，路由到这里，不同的根目录</div>
  <button class='kk' v-on:click="goback">返回上一层</button>
  <button v-on:click="getbook">get函数</button>
  <button v-on:click="have">have函数</button>
</div>
</template>

<script>
    export default {
        name: "page.vue",
      created(){
          console.log()
      },
      methods:{
          goback(){
            this.$router.go(-1)
          },
        getbook:function(){
            this.$api.getbook('参数')
        },
        have:function(){
            this.$api.have('考靠靠')
        }
      }
    }
</script>

<style scoped>
  .kk{
    border:1px solid red
  }
</style>
