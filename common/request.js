import baseUrl from './baseUrl.js'
import axios from 'axios'


//const axios = require('axios');同引入一样
const request={}
// Make a request for a user with a given ID
console.log(baseUrl)

request.getbook=(x,y)=>{
  console.log(x+'============'+y)
  axios.get(baseUrl+'satinGodApi?type=1&page=1')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
},
request.have=(x,y)=>{
    axios.post(baseUrl+'satinGodApi?type=1&page=1')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

export default request

