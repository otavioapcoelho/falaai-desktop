<template>
  <div id="orientation">
      <div class="wizard six-layer">

      </div>
      <div class="content-wrapper four-layer left-content">
        <div class="orientations-list">
          <orientation-list
          :items="items"
          :onClickCallback="clickCallback"
          additionTitle="Nova Orientação"
          searchTitle="Buscar Orientações"
          :isSelectedFn="isSelected"/>
        </div>
        <div class="content">

        </div>
      </div>
  </div>
</template>

<script>
import List from "@/list/List"
import {mapGetters, mapActions} from "vuex"
import store from '@/store'
import * as NavbarConst from "@/consts/NavbarConst"
import * as StoreAction from "@/store/StoreActions"
import * as Getter from "./OrientationGetters"
import * as Action from "./OrientationActions"

export default {
  name: 'Orientation',
  components: {
    'orientation-list': List
  },
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters({
      items: Getter.ITEMS,
      isSelected: Getter.IS_SELECTED
    })
  },
  methods: {
    ...mapActions({
      clickCallback: Action.SELECT_ORIENTATION,
    })
  },
  created: function() {
    store.dispatch(Action.LOAD_DATA)
  },
  mounted: function() {
    store.dispatch(StoreAction.SET_TAB, NavbarConst.ORIENTATIONS)
  }
}
</script>

<style lang="css" scoped>

#orientation {
  height: 100%;
  width: 100%;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  background: white;
}

.wizard {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background-color: white;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.content-wrapper {
  position: relative;
  margin-top: -65px;
  padding-top: 65px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.orientations-list {
  height: 100%;
  width: 30%;
}

.content {
  height: 100%;
  width: 70%;
  box-sizing: border-box;
  padding: 30px;
  background-color: #f4f5f8;
}

</style>
