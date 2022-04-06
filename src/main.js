import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import index from './index.css'

Vue.component('MyButton', {
  data() {
    return {
      buttonText:'myButton'
    }
  },
  template: `<button>   {{buttonText}}</button>`
})

new Vue({
  render: h => h(App),
}).$mount('#app')
