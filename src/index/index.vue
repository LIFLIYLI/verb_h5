<template>

  <el-container style="height:100vh;">
    <el-header>
      <div class="left">娱乐乐翻天</div>
      <div class="right">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </div>
    </el-header>
    <el-container>
      <el-container class="content">
             <el-menu
               default-active="1"
               class="el-menu-vertical-demo"
               unique-opened
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               :collapse="isCollapse"
               active-text-color="#ffd04b">
               <el-submenu v-for="(item,index) in data" v-bind:key="index" :index="index+1+''">
                 <template slot="title">
                   <i :class="'el-icon-'+item.icon"></i>
                   <span>{{item.title}}</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item :index="index+1+'-'+(indexs+1)"
                                 v-for="(items,indexs) in item.list"
                                 v-bind:key="indexs"
                                 :data="items.path"
                                 v-on:click="showPages($event)">
                     {{items.name}}
                   </el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
             </el-menu>
        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>

</template>

<script>

  export default {
    name:'index.vue',
    data() {
      return {
        isCollapse: false,
        data:[
          {title:'首页',icon:'help',list:[{name:'娱乐',path:'amuse'},{name:'影视作品',path:'film'},{name:'网咖',path:'cafe'},{name:'动漫',path:'animation'}]},
          {title:'个人资料',icon:'info',list:[{name:'空间资料站',path:'info'},{name:'作品',path:'/'},{name:'资金链',path:'moneylist'}]},
          {title:'社区',icon:'menu',list:[{name:'团队竞技',path:'team'},{name:'社交网站',path:'9'},{name:'流动基金',path:'0'},{name:'合法机构',path:'11'},{name:'机械组装',path:'12'}]},
          {title:'上传',icon:'success',list:[{name:'lean数据库',path:'leancloud'},{name:'七牛云',path:'qiniu'}]},
          {title:'设置',icon:'setting',list:[{name:'系统设置',path:'system'},{name:'声音',path:'13'},{name:'画质',path:'15'},{name:'抗锯齿',path:'16'},{name:'速度',path:'17'}]}
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
       // console.log(key);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      showPages:function(e){
        console.log(e.$attrs.data)
        this.$router.push({path:e.$attrs.data})
      }
    }
  };
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header, .el-footer {
    background-color: #303133;
    color: #E4E7ED;
    text-align: center;
    line-height: 60px;
    padding:0 0;
  }
  .el-header{
    display:flex;

  }
  .el-header>.left{
    width:200px;
    background: cornflowerblue;
  }
  .el-header>.right{
    flex-grow: 1;
    color:#606266;
    /*background:#F2F6FC;*/
    background-color:white;
  }

  .el-main {
    background-color: rgb(236,239,243);
    color: #333;
    text-align: left;
    flex-grow: 1;
    padding:0 0;
  }

  .content{
    display: flex;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    text-align:left;
  }
</style>
