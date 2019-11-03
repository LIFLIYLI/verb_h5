import Axios from 'axios'
export default {

  get:function(){
    return new Promise((resolve, reject)=>{
      Axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res=>{
        console.log(res)
      })
    })
  },
  post:function(){
    return new Promise((resolve,reject)=>{
      Axios({
        url:'https://www.apiopen.top/satinApi?type=1&page=1',
        method:'post',

      }).then(res=>{
        console.log(res)
        console.log('q')
      })
    })
  }
}
