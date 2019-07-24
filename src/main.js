import Vue from 'vue'
import App from './Todolist.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
