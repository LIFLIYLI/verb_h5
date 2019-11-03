<template>
<div class="parents">
  <div :class="" class="secondBox" :style="'transform: rotate('+dex+'deg)'">
    <ul class="container">
      <li
        v-for="(v,i) in seconds"
        :key="i"
        :style="'transform: rotate('+18*i+'deg);'"
      >{{v}}</li>
    </ul>
  </div>
  <el-button @click="move">你好</el-button>
</div>
</template>

<script>
    export default {
        name: "moeylist",
      data(){
          return {
            seconds:['零','壹','贰','叁','肆','伍','陆','柒','捌','玖','拾','拾壹','拾贰','拾叁','拾肆','拾伍','拾陆','拾柒','拾捌','拾玖'],
            dex:0,
            kk:'',
          }
      },
      methods:{
          move:function(){
            this.dex+=100
          }
      }
    }
</script>

<style scoped>
  .parents{

  }
  .secondBox {
    width: 400px;
    height: 400px;
    margin:40px;
    border:1px solid red;
    transform-origin:50% 50% 0;
    border-radius:50%;
    transition: all 1s;

  }
  @keyframes mymove
  {
    from {transform: rotate(0deg)}
    to {transform: rotate(860deg)}
  }
  .container {
    /*overflow:auto;*/
    list-style: none;
    width: 100%;
    height:100%;
    padding:0;
    margin:0;
    position:relative
  }
  .container>li{
    position:absolute;
    transform-origin:50% 50% 0;margin-left:0px;margin-top:190px;
    color:red;
    top:0;
    left:0;
    width:100%;
    height:20px;
    background: -webkit-linear-gradient(right ,blue,transparent);
  }
</style>
