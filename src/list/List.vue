<template>
<div class="list-wrapper">
  <div class="actions left-content three-layer">
    <slot name="header">
      <div class="action font-md center-content" @click="additionButtonCallback()">
        <img src="@/assets/images/plus.svg">
        {{additionTitle}}
      </div>
      <div class="action font-md center-content" @click="searchButtonCallback()">
        <img src="@/assets/images/search.svg">
        {{searchTitle}}
      </div>
    </slot>
  </div>
  <div class="content-wrapper">
    <div class="alphabet-wrapper two-layer" v-if="hasAlphabet">
      <div class="letter center-content" v-for="letter in alphabet"
      :class="{'focused': isFocused(letter)}">
        <div class="circle-wrapper center-content two-layer" @click="setScroll(letter)">
          <div class="circle two-layer center-content">
            <span>{{letter}}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="items-container" class="items-container" @scroll="getOnScrollFn"
    :class="{
      'has-alphabet': hasAlphabet
      }">
      <div class="items-wrapper one-layer">
        <custom-list-item v-for="item in getItems" :key="item.id"
        :item="item"
        :index="items.indexOf(item)"
        :isSelected="getIsSelectedFn(item)"
        :onClick="getCallback"
        :filteredIndex="getFilteredIndex(item)"/>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import ListItem from "./ListItem"

export default {
  name: 'List',
  props: ['items',
  'filteredItems',
  'onClickCallback',
  'additionTitle',
  'searchTitle',
  'isSelectedFn',
  'hasAlphabet',
  'searchButtonCallback',
  'additionButtonCallback'],
  data: () => {
    return {
      alphabet: ['#', ...[...Array(26)].map((val, i) => String.fromCharCode(i + 65)), '!'],
      focusedLetter: '#'
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
    },
    isFocused() {
      return letter => letter.toUpperCase() == this.focusedLetter.toUpperCase()
    },
    getFilteredIndex() {
      return item => {
        if(this.filteredItems) {
            return this.filteredItems.indexOf(item)
        }
        return this.items.indexOf(item)
      }
    },
    getOnScrollFn() {
      return event => {
        if(event.target.scrollTop > 0) {
          let index = Math.floor(event.target.scrollTop / 80)
          let item = this.getItems[index]
          let letter = item.title.slice(0,1)
          this.focusedLetter = letter
        } else {
          this.focusedLetter = '#'
        }
      }
    }
  },
  methods: {
    setScroll: function(letter) {
      if(letter == "#") {
        document.getElementById('items-container').scrollTop = 0
        return
      }
      let item = this.getItems.find(item => item.title.toUpperCase().startsWith(letter.toUpperCase()))
      if(this.getItems.indexOf(item) == -1 || letter == '!') {
        document.getElementById('items-container').scrollTop = 999999
      } else {
        document.getElementById('items-container').scrollTop = this.getItems.indexOf(item) * 80
      }
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
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
}

.action {
  height: 100%;
  background-color: white;
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
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow: auto;
  position: absolute;
  top: 0;
  padding-top: 50px;
}

.items-container.has-alphabet {
  width: 95%;
  left: 5%;
}

.items-wrapper {
  height: 100%;
  width: 100%;
}

.alphabet-wrapper {
  position: relative;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  width: 5%;
  height: 100%;
  padding: 1% 0;
}

.letter {
  height: 3.5%;
  width: 100%;
  display: block;
  font-size: 10px;
}

.letter-div {
  height: 100%;
  width: 100%;
  font-weight: bold;
}

.letter.focused {
  color: red;
}

.circle-wrapper {
  height: 100%;
  width: 100%;
}

.circle-wrapper:hover {
  cursor: pointer;
}

.circle {
  border-radius: 18px;
  box-shadow: 0 0 2px #888;
  height: 13px;
  display: block;
  width: 13px;
}

.focused .circle {
  background-color: #e7f0f7;
  color: #3b5897;
  border: #6197c6;
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
