// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'

import '~/assets/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  // registering BootstrapVue plugin
  Vue.use(BootstrapVue)
  Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
