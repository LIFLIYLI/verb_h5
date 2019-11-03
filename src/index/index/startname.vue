<template>
  <div>
    <div><span>上个页面传过来的值是：</span>{{text}}</div>
  </div>
</template>

<script>
    export default {
        name: "startname",
      data(){
          return {
            text:''
          }
      },
      created() {

        this.text=this.$route.query.id?this.$route.query.id:this.$route.params.id
      },
      mounted(){

      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
