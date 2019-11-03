<template>
  <div>
    <div class="main_title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/iii' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>上传</el-breadcrumb-item>
        <el-breadcrumb-item>leancloud数据库</el-breadcrumb-item>
      </el-breadcrumb>
      <h3>上传信息</h3>
    </div>
    <div class="up_content">
      <div><span>名字：</span><el-input v-model="name" placeholder="请输入内容"></el-input></div>
      <div><span>电话：</span><el-input v-model="phone" type='number' placeholder="请输入内容"></el-input></div>
      <el-button type="primary" v-on:click="upLeancloud">提交</el-button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "leancloud",
      data(){
          return {
            name:'',
            phone:'',
            address:'',
            times:{},
            ak:'阿师傅你好阿是'
          }
      },
      mounted(){
       // this.getnowTime()
      },
      methods:{
          upLeancloud:function(){
            if(this.name!=''&& this.phone!=''){}else{
              this.$message({
                message:'请输入信息',
                type:'false'
              })
              return false
            }
            this.getnowTime()
            const TestObject = this.AV.Object.extend('TestObject');
            const testObject = new TestObject();
            testObject.set('name', {name:this.name,phone:this.phone});
            testObject.set('date',this.times);
            testObject.save().then((testObject)=> {
              this.name=''
              this.phone=''
              this.open2()
            })
          },
        getnowTime:function(){
          const Time=new Date()
          this.times.year=Time.getFullYear()
          this.times.month=Time.getMonth()+1
          this.times.date=Time.getDate()
        },
        open2() {
          this.$message({
            message: '提交成功',
            type: 'success',
            offset:200,
            duration:1000
          });
        }
      }
    }
</script>

<style scoped>
.up_content{
  margin:40px ;
}
.el-input{
  margin:20px 0;
  width:40%;

}
.main_title{
  padding:20px 20px;
  color:#606266;
  background:white;
  border-top:1px solid #e0e0e0;

}
h3{
  margin-bottom:0;
}
</style>
