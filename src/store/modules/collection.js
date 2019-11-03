const state={ //存储数据
  kk:'ni',
  cc:'123456'
}
const getters={   //负责查询数据的方法
  giveData(){
    return state.kk
  },
  giveCCvalue(){
    return state.cc
  },
}
const mutations={   //更改state中的数据值
  changeStateValue(kk){
    state.kk+=1
  },
  changeOthers(cc,x){
    state.cc=x
  },
  nextChange(){
    state.cc='异步执行更改'
  }
}
const actions={     //异步执行mutations里面的方法
  carryMutations(context){
    context.commit('nextChange')
  }
}

export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
