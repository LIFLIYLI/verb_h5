import request from '../common/request.js'
const api={}

api.getbook=pages=>request.getbook('xxxxx',pages)
api.have=function(pages){
  request.have('xxxxxxxx',pages)
}

export default api
