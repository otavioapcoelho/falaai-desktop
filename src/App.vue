<template>
  <div id="app">
    <custom-navbar
    :selected="tab"
    :onTabClick='goToTab'
    :onHomeClick='goHome'/>
    <div class="router-view-wrapper center-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/animation.css'
import '@/assets/styles/background.css'
import '@/assets/styles/column.css'
import '@/assets/styles/font.css'
import '@/assets/styles/icon.css'
import '@/assets/styles/layers.css'
import '@/assets/styles/positioning.css'
import '@/assets/styles/scrollbar.css'

import Navbar from "@/components/Navbar"
import {mapActions, mapState} from 'vuex'
import * as Action from './store/StoreActions'
import router from './router/index'

export default {
  name: 'App',
  components: {
    'custom-navbar': Navbar
  },
  methods: {
    ...mapActions({
      goToTab: Action.GO_TO_TAB
    }),
    goHome: function() {
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    ...mapState([
      'tab'
    ])
  }
}
</script>

<style>
#app {
  font-family: Arial;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #3b495e;
  width: 100%;
  height: 100%;
}

.router-view-wrapper {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
}
</style>
