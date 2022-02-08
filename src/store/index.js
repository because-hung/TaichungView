import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from '../api/taichungview.json'
export default new Vuex.Store({
  state: {
    ViewData: []
  },
  actions: {

  },
  mutations: {
    GETAPI(state){
      state.ViewData = data
      console.log(state.ViewData)
    }
  },
  getters:{
     view(state){
     return state.ViewData.slice(0,20)
    }
  },
  modules: {
  }
})
