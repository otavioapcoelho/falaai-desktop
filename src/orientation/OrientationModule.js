import * as Stage from './Stages'
import * as Action from './OrientationActions'
import * as Getter from './OrientationGetters'
import * as Mutation from './OrientationMutations'
import * as Service from './OrientationService'

export default {

  state: {
    stages: Object.keys(Stage),
    selectedOrientation: {},
    items: []
  },

  actions: {
    [Action.LOAD_DATA] : store => {
      let items = Service.load()
      store.commit(Mutation.LOAD_DATA, {items})
    },
    [Action.SELECT_ORIENTATION] : (store, orientation) => {
      store.commit(Mutation.SELECT_ORIENTATION, orientation)
    },
    [Action.TESTE] : (store, orientation) => {
      store.commit(Mutation.NOTIFICATION, orientation)
    }
  },

  getters: {
    [Getter.IS_SELECTED] : state => (orientation) => {
      return state.selectedOrientation.id == orientation.id
    },
    [Getter.ITEMS] : state => state.items
  },

  mutations: {
    [Mutation.SELECT_ORIENTATION] : (state, orientation) => {
      state.selectedOrientation = orientation
    },
    [Mutation.LOAD_DATA] : (state, newState) => {
      state.items = newState.items
    },
    [Mutation.NOTIFICATION] : (state, orientation) => {
      let index = state.items.indexOf(orientation)
      orientation.notification = true,
      state.items.splice(index, 1)
      state.items.unshift(orientation)
    }
  }

}
