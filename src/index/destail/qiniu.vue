<template>
<div>
  <div class="main_title">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/iii' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>上传</el-breadcrumb-item>
      <el-breadcrumb-item>qiniu数据库</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>上传音频/视频</h3>
  </div>

  <div class="up_content">
    <div class="update" v-if="show">
      <span>第一种:formData上传视频</span>
      <div><input type="file" accesskey="video/*" v-on:change="videoChange($event)"></div>
      <span>点击录制文件或者选择文件</span>
    </div>
    <div class="update" v-if="!show">
      <span>播放视频</span><br>
        <video :src="baseurl" ref="videoPlay" autoplay controls></video>
      <br>
        <el-button>重新选择</el-button>
        <el-button>确认上传</el-button>
    </div>
    <div class="update" ref="lll">
      <span>第二种:uploader直传视频</span>
      <div v-on:click="chooseVideo()"></div>
      <span>点击选择文件或者拖拽文件</span>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "qiniu",
      data(){
          return {
            show:true,
            baseurl:'',
            upflie:''
          }
      },
      methods:{
          videoChange:function(el){
            this.show=false
            let content=el.target.files[0]
            this.baseurl=URL.createObjectURL(content)
            console.log(this.baseurl)
          },
        chooseVideo:function(){

        }
      }
    }
</script>

<style scoped>
  .up_content{
    margin:40px ;
    border:1px solid red;
    display:flex;
    justify-content: space-between;
  }
  .up_content>.update{
    height:400px;
    border:1px solid blue;
    width:50%;
    text-align: center;
  }
  .up_content>.update>div{
    border:1px solid #a0a0a0;
    width:200px;
    height:200px;
    margin:20px auto;
    position:relative
  }
  .up_content>.update>div::before{
    content:'';
    display:block;
    width:1px;
    height:60%;
    background:red;
    position:absolute;
    top:20%;
    left:50%;
  }
  .up_content>.update>div::after{
    content:'';
    display:block;
    width:60%;
    height:1px;
    background:red;
    position:absolute;
    top:50%;
    left:20%;
  }
  video{
    width:60%;
    height:200px;
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
