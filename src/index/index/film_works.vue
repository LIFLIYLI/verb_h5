<template>
  <div>
    <div>
      <h3>影视作品页面</h3>
      <span>{{content}}</span>
      <div>{{index}}</div>
    </div>


  </div>
</template>

<script>
  import vm from '../../js/eventHub'
    export default {
        name: "film_works",
      data(){
          return {
            content:'当前页面的值，等待其他页面触发本页面的方法',
            index:1,

          }
      },
      beforeCreate(){
                console.log(this.index)
      },
      mounted(){
        vm.$off('filmPageNum')
        vm.$on('filmPageNum',(msg)=>{//最好写个取消监听，不然每次进来都会组册监听一次，造成重复监听
          console.log(msg,this.index)
          this.alertFn()
        })
      },
      beforeDestroy(){
        console.log(this.index)
      },
      destroyed(){
      },
      methods:{
          init(){
            console.log('初始化')

          },
        alertFn:function(){
            alert('dongle')
        }

      }
    }
</script>

<style scoped>

</style>
