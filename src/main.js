//项目入口文件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//创建新的Vue实例
new Vue({
  render: h => h(App),
}).$mount('#app')
