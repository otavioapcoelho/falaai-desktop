<template>
  <div class="item" @click="onClick(item)"
  :style="getTransform"
  :class="{
    'selected': isSelected,
    'notification': item.notification
    }">
    <div class="primary-info font-md">
      <div class="title text">{{item.title}}</div>
      <div class="subtitle font-sm text">{{item.func}} - {{item.send}}</div>
      <div class="message center-content-vertical font-sm text">
        <span class="text">{{index}}{{item.content}}</span>
      </div>
    </div>
    <div class="secondary-info font-sm">
      <div class="secondary-func">
        <span>{{item.func}}</span>
      </div>
      <div class="secondary-hour">
        <span>{{item.hour}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ['item', 'onClick', 'isSelected', 'index'],
  computed: {
    getTransform() {
      return {
        transform: `translate3d(0px, ${this.index || 0}00%, 0px)`
      }
    }
  }
}
</script>

<style lang="css" scoped>

.item {
  padding: 12px 12px 12px 22px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  width: 100%;
}

.item {
  position: absolute;
  top: ;
  left: ;
  transition: all 0.3s ease-out, background-position 1ms;
}

.item:hover {
  cursor: pointer;
}

.primary-info {
  float: left;
  width: 85%;
  height: 100%;
}

.text {
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
}

.title {
  width: 100%;
  text-align: left;
  height: 30%;
}

.subtitle {
  text-align: left;
  height: 20%;
}

.message {
  height: 50%;
}

.secondary-info {
  float: right;
  width: 15%;
  height: 100%;
}

.secondary-func {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.secondary-func span {
  width: 100%;
}

.secondary-hour {
  height: 50%;
  width: 100%;
}

.item.selected {
  background-color: #f4f5f8;
  border-right: 4px solid #3b5897;
}

.item.notification {
  background-color: #dcecc9;
  border-right: 4px solid #8cc152;
}


</style>
