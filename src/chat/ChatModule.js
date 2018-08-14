import * as Action from "./ChatActions.js"
import * as Getter from "./ChatGetters.js"
import * as Mutation from "./ChatMutations.js"
import * as Service from "./ChatService.js"

export default {

  state: {
    channels: [],
    contacts: [],
    selectedChannelId: ''
  },

  actions: {
    [Action.LOAD_DATA] : store => {
      Service.loadChannels().then(data => {
        store.commit(Mutation.LOAD_CHANNELS, {data: data.sort((a, b) => {
          if(b.title > a.title) {
            return -1
          }
          return 1
        })})
      })
      Service.loadContacts().then(data => store.commit(Mutation.LOAD_CONTACTS, {data}))
    },
    [Action.SELECT_CHANNEL] : (store, channel) => {
      store.commit(Mutation.SELECT_CHANNEL, {id: channel.id})
    }
  },

  getters: {
    [Getter.ITEMS] : state => state.channels,
    [Getter.IS_SELECTED] : state => channel => channel.id == state.selectedChannelId
  },

  mutations: {
    [Mutation.LOAD_CHANNELS] : (state, newState) => {
      state.channels = newState.data
    },
    [Mutation.LOAD_CONTACTS] : (state, newState) => {
      state.contacts = newState.data
    },
    [Mutation.SELECT_CHANNEL] : (state, newState) => {
      state.selectedChannelId = newState.id
    }
  }

}
