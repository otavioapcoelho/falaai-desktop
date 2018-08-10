<template>
  <div class="navbar left-content eight-layer">
    <div class="left-side left-content">
      <div class="icon center-content left">
        <div class="image-wrapper center-content" @click="onHomeClick">
          <img src="@/assets/images/icn_fala_ai.svg">
        </div>
      </div>
      <div class="tab center-content font-sm left"
        :class="{'selected': tabs.CHAT == this.selected}"
        @click="onTabClick(tabs.CHAT)">
        {{tabs.CHAT}}
      </div>
      <div class="tab center-content font-sm left"
        :class="{'selected': tabs.ORIENTATIONS == this.selected}"
        @click="onTabClick(tabs.ORIENTATIONS)">
        {{tabs.ORIENTATIONS}}
      </div>
    </div>
    <div class="right-side right-content">
      <div class="user-info left-content right">
        <div class="user-image">
          <div class="image-wrapper">

          </div>
        </div>
        <div class="user-name center-content font-md">
          Bruna Venesclau Pereira
        </div>
      </div>
      <div class="logout-button right center-content">
        <img src="@/assets/images/logout.svg">
      </div>
    </div>
  </div>

</template>

<script>
import * as Tabs from "@/consts/NavbarConst"

export default {
  data: () => {
    return {
        tabs: Tabs
    }
  },
  props: ['selected', 'onTabClick', 'onLogoutClick', 'onHomeClick']
}
</script>

<style lang="css" scoped>

.navbar {
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  position: absolute;
  top: 0;
  left: 0;
}

.left-side {
  height: 100%;
  width: 70%;
}

.right-side {
  height: 100%;
  width: 30%;
}

.icon {
  height: 100%;
  width: 50px;
}

.image-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #3b5897;
}

.image-wrapper:hover {
  cursor:pointer;
}

.image-wrapper img {
  width: 22px;
  height: 22px;
}

.tab {
  position: relative;
  width: 165px;
  height: 100%;
  box-sizing: border-box;
}

.tab::after {
  content: '';
  position: absolute;
  width: 165px;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.tab:hover:not(.selected)::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.tab:hover {
  cursor: pointer;
}

.tab.selected {
  border-bottom: 2px #3b5897 solid;
  color: #3b5897;
}

.user-info {
  max-width: 200px;
  height: 100%;
  margin-right: 10px;
}

.user-image {
  width: 20%;
}

.user-name {
  width: 80%;
  max-width: 180px;
  padding: 5px;
  color: #3b5897;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.logout-button {
  height: 100%;
  width: 50px;
  border: solid 1px #e2e2e2;
  box-sizing: border-box;
}

.logout-button:hover {
  cursor: pointer;
  background-color: #f4f5f8;
  border: solid 1px #c5d0e1;
}

.logout-button img {
  width: 16px;
  height: 16px;
}
</style>
