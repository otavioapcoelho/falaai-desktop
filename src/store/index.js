import * as Mutation from "./StoreMutations"
import * as Action from "./StoreActions"
import * as Getter from "./StoreGetters"
import Vuex from 'vuex'
import Vue from 'vue'
import * as Tab from '../consts/NavbarConst'
import router from '../router/index'
import OrientationModule from '@/orientation/OrientationModule'

Vue.use(Vuex)

export default  new Vuex.Store({

  state: {
    tab: ''
  },

  actions: {
    [Action.SET_TAB] : (store, tab) => {
      switch (tab) {
        case Tab.ORIENTATIONS:
          router.push({name: 'Orientation'})
          break;
        default:
          console.error('ERROR ' + tab + ': TAB NOT FOUND')
      }
      store.commit(Mutation.SET_TAB, tab)
    }
  },

  getters: {

  },

  mutations: {
    [Mutation.SET_TAB] : (state, newState) => state.tab = newState.tab || ''
  },

  modules: {
    OrientationModule
  }

})
