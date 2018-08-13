<template>
<div class="list-wrapper">
  <div class="actions left-content two-layer">
    <div class="action font-md center-content">
      <img src="@/assets/images/plus.svg">
      {{additionTitle}}
    </div>
    <div class="action font-md center-content">
      <img src="@/assets/images/search.svg">
      {{searchTitle}}
    </div>
  </div>
  <div class="content-wrapper">
    <div class="alphabet-wrapper two-layer">
      <div class="letter" v-for="letter in alphabet">
        {{letter}}
      </div>
    </div>
    <div class="items-container">
      <div class="items-wrapper one-layer">
        <custom-list-item  v-for="item in getItems" :key="item.id"
        :item="item"
        :index="items.indexOf(item)"
        :isSelected="getIsSelectedFn(item)"
        :onClick="getCallback"/>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import ListItem from "./ListItem"

export default {
  name: 'List',
  props: ['items', 'onClickCallback', 'additionTitle', 'searchTitle', 'isSelectedFn'],
  data: () => {
    return {
      alphabet:[...Array(26)].map((val, i) => String.fromCharCode(i + 65))
    }
  },
  computed: {
    getIsSelectedFn() {
      return this.isSelectedFn
    },
    getCallback() {
      return this.onClickCallback
    },
    getItems() {
      return this.items || []
    }
  },
  components: {
    'custom-list-item' : ListItem
  }
}
</script>

<style lang="css" scoped>

.list-wrapper {
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

.content-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: -50px;
  padding-top: 50px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  padding-right: 3px;
  box-sizing: border-box;
}

.items-container {
  height: 100%;
  width: 95%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow: auto;
  position: absolute;
  top: 50px;
  left: 5%;
}

.items-wrapper {
  height: 100%;
  width: 100%;
}

.alphabet-wrapper {
  position: relative;
  top: 50px;
  left: 0;
  width: 5%;
  height: 100%;
  padding: 1% 0;
}

.letter {
  height: 3.5%;
  width: 100%;
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
