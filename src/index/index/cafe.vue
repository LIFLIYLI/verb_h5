<template>
  <div class="main">
    <!--<div class="design">dgehrtjh</div>-->

    <div class="timeBox">
      <div class="yearBox box">{{year}}</div>
      <div class="dayBox box" :style="'transform: rotate('+(360/day.length)*curDay+'deg)'">
        <ul class="container">
          <li
            v-for="(v,i) in day"
            :key="i"
            :style="'transform: rotate('+(-360/day.length) * (i+1) +'deg);transform-origin: -100% 50% 0px;margin-left:150px;margin-top:90px'"
          >{{v}}</li>
        </ul>
      </div>
      <div class="hourBox box" :style="'transform: rotate('+(-360/hour.length)*curHour+'deg)'">
        <ul class="container">
          <li
            v-for="(v,i) in hour"
            :key="i"
            :style="'transform: rotate('+(360/hour.length)*i+'deg);transform-origin: -200% 50% 0px;margin-left:300px;margin-top:190px'"
          >{{v}}</li>
        </ul>
      </div>
      <div class="minutesBox box" :style="'transform: rotate('+(-360/minutes.length)*curMin+'deg)'">
        <ul class="container">
          <li
            v-for="(v,i) in minutes"
            :key="i"
            :style="'transform: rotate('+(360/minutes.length)*i+'deg);transform-origin: -300% 50% 0px;margin-left:450px;margin-top:290px'"
          >{{v}}</li>
        </ul>
      </div>
      <div class="secondBox" :style="'transform: rotate('+(-360/seconds.length)*curSec+'deg)'">
        <ul class="container">
          <li
            v-for="(v,i) in seconds"
            :key="i"
            :style="'transform: rotate('+(360/seconds.length)*i+'deg);transform-origin: -400% 50% 0px;margin-left:540px;margin-top:390px'"
          >{{v}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cafe",
      data(){
          return {
            data: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '万'],
            hour: [],
            curHour: 0,
            day: [],
            curDay: 0,
            minutes: [],
            curMin: 0,
            seconds: [],
            curSec: 0,
            year: ''
          }
      },
      created () {
        this.dealData()
        this.seconds = JSON.parse(JSON.stringify(this.minutes))
        let sky = ['', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚']
        let land = ['', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申']
        let one = new Date().getFullYear() % 10
        let two = new Date().getFullYear() % 12
        this.year = sky[one] + land[two]
        setInterval(() => {
          this.getTime()
        }, 1000)
      },
      methods:{
        dealData () { // 生成数据
          // 星期
          for (let i = 0; i < 7; i++) {
            this.day.push('星期' + this.data[i + 1])
          }
          // 小时
          for (let i = 0; i < 24; i++) {
            if (i < 11) {
              this.hour.push(this.data[i])
            } else {
              this.hour.push((parseInt(i / 10) > 1 ? this.data[parseInt(i / 10)] : '') + '拾' + (parseInt(i % 10) !== 0 ? this.data[i % 10] : ''))
            }
          }
          // 分钟
          for (let i = 0; i < 60; i++) {
            if (i < 11) {
              this.minutes.push(this.data[i])
            } else {
              this.minutes.push((parseInt(i / 10) > 1 ? this.data[parseInt(i / 10)] : '') + '拾' + (parseInt(i % 10) !== 0 ? this.data[i % 10] : ''))
            }
          }
        },
        getTime () { // 获取时间
          let now = new Date()
          this.curSec = now.getSeconds()
          this.curDay = now.getDay()
          this.curMin = now.getMinutes()
          this.curHour = now.getHours()
        }
      }
    }
</script>

<style scoped>
  .box{
    position: absolute;
    transition: 0.5s;
  }
  .main{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #ccc;
    border:1px solid red;
  }
  .yearBox{
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    margin-top: -20px;
    margin-left: -20px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
  .timeBox{
    width: 800px;
    height: 800px;
    margin: 0 auto;
    position: relative;
  }
  .dayBox {
    width: 200px;
    height: 200px;
    top: 300px;
    left: 300px;
  }
  .hourBox {
    width: 400px;
    height: 400px;
    top: 200px;
    left: 200px;
  }
  .minutesBox {
    width: 600px;
    height: 600px;
    top: 100px;
    left: 100px;
  }
  .secondBox {
    width: 800px;
    height: 800px;
    top: 0;
    left: 0;
    position: absolute;
    border:1px solid red
  }
  .container {
    overflow:auto;
    list-style: none;

  }
  .container>li {
    width: 50px;
    height: 20px;
    font-size: 12px;
    position: absolute;
  }

  .design{
    border:1px solid blue;
    width:200px;
    height:200px;
    transform:rotate(12deg);
  }
</style>
