

import Vue from "vue";
import Vuex from "vuex";
import {CHANGE_MAIZUO_TITLE} from "./type"

Vue.use(Vuex) //注册vuex


var store = new Vuex.Store({
  state: {
    title:"卖座电影",
    list:[]
  },
  //1.
  mutations:{
  	changeHeadName(state,payload){
  		console.log(state,payload)
  		state.title = payload
  		//state.list = payload
  	}
  }

  
  

  /*mutations:{
    [CHANGE_MAIZUO_TITLE](state,payload){
      console.log(state,payload)
      state.title = payload
      //state.list = payload
    }
  }*/
  
})

export default store;

