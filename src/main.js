// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import go from "gojs"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/index.css'
import './style/pages.css'
import './style/components.css'


//import './style/element-variables.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(go);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
