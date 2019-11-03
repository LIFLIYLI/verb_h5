<template>
  <div>
    <slot></slot>
    <div class="child">

      <p>这里是子组件onesss插槽</p>
      <slot name="onesss" :id="waid">没有内容时默认显示字段</slot>

    </div>
    <div class="otherk">
      <p>这是twosss具名插槽:内容如下</p>
      <slot name="twosss">没有内容时默认显示字段</slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sonHtml",
      data(){
          return {
            waid:'这是slot插槽的绑定属性，可以向上传'
          }
      }
    }
</script>

<style scoped>
.child{
  border:1px solid darkmagenta;
  margin:30px;
  padding:20px;
  text-align: center;
}
  .child>p{
    color:royalblue;
  }
  .otherk{
    margin:50px;
    border:1px solid green;
    padding:40px;
  }
</style>
