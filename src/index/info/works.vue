<template>
  <div>
    <div class="parents">
      <div>这里是父组件，且这里有一个子组件:</div>
      <son-html>父组件内容：这只有这一个内容:这里是匿名插槽，</son-html>
    </div>
    <div class="brither">
      <p>另一个父组件,他的内容是：</p>
      <son-html v-slot:onesss="msg">父组件内容：具名插槽的分发模式不显示twosss<br>收到slot传过来的绑定值为：<span>{{msg.id}}</span></son-html>
    </div>
    <div class="nextbrither">
      <p>再下一个父组件,他的内容是：</p>
      <son-html v-slot:twosss>父组件内容：啦啦啦啦，分发到two组件不显示onesss</son-html>
    </div>
  </div>

</template>

<script>
  import SonHtml from './child/sonHtml'
    export default {
        name: "works",
      components:{
          SonHtml
      },
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
.parents{
  border:1px solid cornflowerblue;
  padding:40px;
}
  .brither{
    border:1px solid navy;
    margin:40px;
    padding:20px
  }
  .brither span{
    color:red
  }
  .nextbrither{
    border:1px solid #a0a0a0;
    margin:40px
  }
</style>
