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
    <div style="margin:30px;background: white;">
      <template>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="电话"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </template>

      <div style="padding:20px;text-align: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"

          :total="allTextNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "info",
    data() {
      return {
        tableData: [],
        currentPage4: 1,
        allTextNum:0,
        pageSize:10,
        pagenum:0,
        obj:[]
      }
    },
    created(){
      var query = new this.AV.Query('TestObject');

      query.find().then((res) => {
        // students 是包含满足条件的 Student 对象的数组
        this.obj=res
        this.allTextNum=res.length
        this.addList(this.obj)
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        //this.pageSize=val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pagenum=val
        this.addList(this.obj)

      },
      showPages: function (e) {
        console.log(e.$attrs.data)
        this.$router.push({path: e.$attrs.data})
      },
      addList:function(res){
       res.forEach((item,index)=>{
         if( this.pageSize * this.pagenum < index  && index <= this.pageSize*(this.pagenum+1)) {
           const obj = {}
           obj.date = item.attributes.date.year + '-' + item.attributes.date.month + '-' + item.attributes.date.date
           obj.name = item.attributes.name.name
           obj.address = item.attributes.name.phone
           this.tableData.push(obj)
         }
       })

      },
      staill:function(){
        alert(1)
      }
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
</style>
