<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium" >{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="block">
      <span class="demonstration">Click 指示器触发,点击跳转页面通过跳转传值</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item" >
          <h3 class="small" v-on:click="gotopage(item)">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-button type="parmary" @click="changeFilmPage">页面间通讯，触发影视作品页面</el-button>
    <br>
    <div class="parents">
      <h3>这里是父级组件作用域</h3>
      <el-button type="primary" v-on:click="clickDom">触发子组件的事件</el-button>
      <el-button type="primary" v-on:click="changeNum">更改当前页面的num值,并且向下传值</el-button>
      <div>当前页面的num值：{{nums}}<br>当前页面的title值：{{title}}<br>子组件通知父组件触发函数：{{content}}</div>
      <parent-page
        v-bind:num="nums"
        :title="title"
        v-on:changeContent="childrenEvent"
        ref="child">
      </parent-page>
    </div>
  </div>
</template>

<script>
  import parentPage from './child'
  import vm from '../../js/eventHub'
    export default {
        name: "amuse",
      components:{
          parentPage
      },
      created(){
          console.log(this.$on)

      },
      data(){
          return {
            nums:1,
            title:'电话 i 不放',
            content:''
          }
      },
      methods:{
          gotopage:function(e){
            let asd=''
            switch (e){
              case 1:
                 asd='startname'
                this.$router.push({path:asd,query:{id:"这是通过query传值"}})
                  break;
              case 2:
                asd='startname'
                this.$router.push({name:asd,params:{id:"这是通过params传值"}})
                break;
              default:
                asd='99'

            }

          },
        changeNum:function(){
            this.nums++
        },
        clickDom:function(){
            this.$refs.child.clickDom()
        },
        childrenEvent:function(msg){
            console.log(msg)
          this.content=msg.kk
        },
        changeFilmPage:function(){
            vm.$emit('filmPageNum',{name:'页面你好'})
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .block{
    margin:40px;
    border:1px solid blue
  }
  .parents{
    border:1px solid blue;
    padding:20px;
    margin:20px 0;
  }
</style>
