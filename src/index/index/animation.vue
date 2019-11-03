<template>
<div>
  这是modules中的cc值：{{arrList}}
  <br>
  这是modules中的kk值：{{ayylist}}
  <div>
    <h4>直接查询state数据</h4>
    <el-button type="params"  @click="getVuexValue">vuex直接查询查询值state的按钮（直接查询kk）</el-button>
  </div>
  <div>
    <h4>getters查询数据</h4>
    <el-button type="params"  @click="giveVuexValue('kk')">vuex查询值的方法getters的按钮(kk)</el-button>
    <el-button type="params"  @click="giveVuexValue('cc')">vuex查询值的方法getters的按钮(cc)</el-button>
  </div>
  <div>
    <h4>mutations更改state数据</h4>
    <el-button type="params"  @click="changeStateValue">vuex更改state值方法，mutatons</el-button>
    <el-button type="params"  @click="changeOthers">vuex指定更改state值方法(更改cc)，mutatons</el-button>
  </div>
  <div>
    <h4>cations异步执行mutations方法</h4>
    <el-button type="params"  @click="carryMutations">vuex更改state值方法异步执行，mutatons</el-button>
  </div>
</div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
    export default {
        name: "animation",
      data(){
          return {

          }
      },
      computed:{
        ...mapGetters('collection',{ //用mapGetters来获取collection.js里面的getters
          arrList:'giveCCvalue',
          ayylist:'giveData'
        })
      },
      methods:{
          getVuexValue:function(){
            this.$store.state.kk
            console.log(this.$store)
          },
        giveVuexValue:function(x){
            if(x=='kk'){
              this.$store.getters.giveData
              console.log(this.$store.getters.giveData)
            }else{

              this.$store.getters.giveCCvalue
              console.log(this.$store.getters.giveCCvalue)
            }
        },
        changeStateValue:function(){
            this.$store.commit('collection/changeStateValue')
        },
        changeOthers:function(){
            this.$store.commit('collection/changeOthers','指定更改后的值')
        },
        carryMutations:function(){
            this.$store.dispatch('collection/carryMutations')
        }
      }
    }
</script>

<style scoped>


</style>
