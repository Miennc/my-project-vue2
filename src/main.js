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
Vue.component('Custom-Button', {

   props: {
   href: String,
   },
    data (){
    return {
    buttonText: 'button'

      }
    },
      template: `<button><a :href="href"> {{buttonText}}  </a> </button>`
})
new Vue({

  render: h => h(App),
}).$mount('#app')
