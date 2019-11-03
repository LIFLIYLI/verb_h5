<template>
<div>
  <div class="main_title">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/iii' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>活动详情</h3>
  </div>
  <div class="main_box"></div>
  <el-button v-on:click="tak">dian</el-button>
  <el-button @click='sevePost'>post</el-button>

  <div class="edit_container">
    <quill-editor
      v-model="content"
      style="height:200px"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
  </div>
</div>
</template>

<script>
   import http from '../../js/http';

   import { quillEditor } from "vue-quill-editor"; //调用编辑器
   import 'quill/dist/quill.core.css';
   import 'quill/dist/quill.snow.css';
   import 'quill/dist/quill.bubble.css';

    export default {
        name: "team",
      components: {
        quillEditor
      },
      data(){
          return {
           content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
            editorOption: {}
          }
      },
      computed: {
        editor() {
          return this.$refs.myQuillEditor.quill;
        },
      },
      methods:{
          sevePost:function(){
            http.post()
          },
          tak:function(){
             http.get()
          },
        onEditorReady(editor) { // 准备编辑器

        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件

      }
    }
</script>

<style scoped>
  .main_title{
    padding:20px 20px;
    color:#606266;
    background:white;
    border-top:1px solid #e0e0e0;

  }
  h3{
    margin-bottom:0;
  }
  .main_box{
    border:1px solid blue;
  }
</style>
