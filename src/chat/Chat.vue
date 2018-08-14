<template>
  <div id="chat" class="left-content">
    <div class="list-wrapper">
      <chat-list
      :items="items"
      :filteredItems="getFilteteredItens"
      :onClickCallback="clickCallback"
      additionTitle="Nova Convesa"
      :hasAlphabet="true"
      searchTitle="Buscar Contatos"
      :isSelectedFn="isSelected">
        <div slot="header" class="chat-search-container center-content">
          <div class="chat-search-wrapper left-content">
            <img src="@/assets/images/search.svg" class="chat-search-icon">
            <input autofocus type="text" class="chat-search-input" v-model="searchQuery" placeholder="Buscar contato...">
          </div>
        </div>
      </chat-list>
    </div>
    <div class="content-wrapper">

    </div>
  </div>
</template>

<script>
import List from "@/list/List"
import {mapGetters, mapActions} from "vuex"
import store from "@/store"
import * as Action from "./ChatActions"
import * as Getter from "./ChatGetters"

export default {
  name: 'Chat',
  data: () => {
    return {
      searchQuery: ''
    }
  },
  components: {
    'chat-list': List
  },
  computed: {
    ...mapGetters({
      'items': Getter.ITEMS,
      'isSelected': Getter.IS_SELECTED
    }),
    getFilteteredItens() {
      if(this.searchQuery == '') {
        return this.items
      }
      return this.items.filter(item => item.title.toUpperCase().includes(this.searchQuery.toUpperCase()))
    }
  },
  methods: {
    ...mapActions({
      'clickCallback': Action.SELECT_CHANNEL
    })
  },
  created: () => {
    store.dispatch(Action.LOAD_DATA)
  }
}
</script>

<style lang="css" scoped>

#chat {
  width: 100%;
  height: 100%;
}

.list-wrapper {
  width: 30%;
  height: 100%;
  background-color: white;
}

.content-wrapper {
  width: 70%;
  height: 100%;
}

</style>

<style media="screen">

.chat-search-container {
  box-sizing: border-box;
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 12px 16px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.chat-search-wrapper {
  width: 100%;
  height: 100%;
  border: solid 2px #c5d0e1;
  background-color: white;
}

.chat-search-wrapper:focus-within{
  border: solid 2px #9ac0f9;
}

.chat-search-icon {
  margin: 0px 6px;
  height: 17px;
  width: 17px;
}

.chat-search-input {
  box-sizing: border-box;
  padding-left: 15px;
  height: 100%;
  font-size: 16px;
  border: 0px;
  padding: 5px 0;
  width: 100%;
}

.chat-search-input::placeholder {
  font-size: 12px;
  color: #999;
}

.chat-search-input:focus {
  outline: none !important;
}

</style>
