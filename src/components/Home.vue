<template>

</template>

<script>
import store from '@/store'
import * as NavbarConst from "@/consts/NavbarConst"
import * as StoreAction from "@/store/StoreActions"

export default {
  mounted: function() {
    store.dispatch(StoreAction.SET_TAB, NavbarConst.HOME)
  }
}
</script>

<style lang="css">
</style>
