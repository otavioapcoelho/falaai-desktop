<template>
  <div class="orientation-list-wrapper">
    <div class="actions left-content two-layer">
      <div class="action font-md center-content">
        <img src="@/assets/images/plus.svg">
        Nova Orientação
      </div>
      <div class="action font-md center-content">
        <img src="@/assets/images/search.svg">
        Buscar Orientações
      </div>
    </div>
    <div class="items-wrapper one-layer">
      <orientation-list-item  v-for="item in items" :key="item.id"
      :item="item"
      :isSelected="isSelected(item)"
      :onClick="onClickCallback"/>
    </div>
  </div>

</template>

<script>
import ListItem from "./OrientationListItem"
import * as Action from './OrientationActions'
import * as Getter from './OrientationGetters'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'OrientationList',
  props: ['items'],
  methods: {
    ...mapActions({
      onClickCallback: Action.SELECT_ORIENTATION
    })
  },
  computed: {
    ...mapGetters({
      isSelected: Getter.IS_SELECTED
    })
  },
  components: {
    'orientation-list-item' : ListItem
  }
}
</script>

<style lang="css" scoped>

.orientation-list-wrapper {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
}

.actions {
  height: 50px;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
}

.action {
  height: 100%;
  width: 50%;
  color: #2870b2;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.action:hover {
  cursor: pointer;
}

.action img {
  height: 16px;
  width: 16px;
  margin-right: 5px;
}

.items-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: -50px;
  box-sizing: border-box;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  padding-top: 50px;
  overflow-y: scroll;
  overflow: auto;
  direction: rtl;
}

.item {
  height: 80px;
  width: 100%;
  padding-right: 3px;
  background-color: white;
  box-sizing: border-box;
  border-right: 4px solid white;
}

</style>
