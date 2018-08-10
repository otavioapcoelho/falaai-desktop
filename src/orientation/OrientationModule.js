import * as Stage from './Stages'
import * as Action from './OrientationActions'
import * as Getter from './OrientationGetters'
import * as Mutation from './OrientationMutations'

export default {

  state: {
    stages: Object.keys(Stage)

  },

  actions: {
    [Action.SELECT_ORIENTATION] : (store, orientation) => {
      store.commit(Mutation.SELECT_ORIENTATION, orientation)
    }
  },

  getters: {
    [Getter.IS_SELECTED] : state => (orientation) => {
      return state.orientation == orientation
    }
  },

  mutations: {
    [Mutation.SELECT_ORIENTATION] : (state, orientation) => {
      state.selectedOrientation = orientation
    }
  }

}
