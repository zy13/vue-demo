import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 注册vuex

console.log(Vuex); // 一个对象 Store是一个类/构造函数

const strore = new Vuex.Store({
  state: {
    user: {
      age: 18,
      name: 'xiaohei'
    },
    totken: ''
  },
  // 全局的计算属性，依赖state属性
  getters: {
    tenYearsOld(state) {
      return state.user.age + 10
    }
  }
})

export default strore