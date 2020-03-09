import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 历史记录
    history:[]
  },
  // 改变
  mutations: {
    changehistory(state,list){
      state.history=list
      // state.history.push(list)
    },
  },
  // 计算属性
  getters:{
    newhistoty(state){
      var newarr = []
      for(let i=0;i<state.history.length;i++){
        if(newarr.indexOf(state.history[i]) === -1){
            newarr.push(state.history[i])
        }
      }
      return newarr.reverse()
    }
  }
})
