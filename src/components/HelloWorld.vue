<template>
  <div class="hello">
    <div style="border:1px solid blue">
      <input type="text" placeholder="输入代办事项" style="width:100%" ref="writeText" @keydown="wocao($event)">
    </div>
   <button style="border:1px solid red" v-on:click="addList">添加事项</button>
    <h2>正在进行的事项</h2>
    <ul>
      <li v-if="!item.show" v-for="(item,index) in list" v-bind:key="index" ><input type="checkbox" v-model="item.show">{{index}}:{{item.title}}<button @click="deleteList(index)">删除</button></li>
    </ul>
    <h2>已经完成的项目</h2>
    <ul>
      <li v-if="item.show" v-for="(item,index) in list" v-bind:key="index" ><input type="checkbox" v-model="item.show">{{index}}:{{item.title}}<button @click="deleteList(index)">删除</button></li>
    </ul>
    <button v-on:click="gotopage" class="gotobutton">跳转下一页</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     list:[
     ]
    }
  },
  methods:{
    addList:function(){
      if(this.$refs.writeText.value){
        this.list.push({title:this.$refs.writeText.value,show:false})
        this.$refs.writeText.value=''
      }else{
        alert('shurua')
      }

    },
    deleteList:function(e){
      console.log(e)
     this.list.splice(e,1)
    },
    wocao:function(e){
      if(e.keyCode===13){
        this.addList()
      }
    },
    gotopage:function(){
      console.log(this.$router)
      this.$router.push({path:'page'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .gotobutton{
    border:1px solid blue
  }
</style>
