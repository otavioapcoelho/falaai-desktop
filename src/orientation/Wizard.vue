<template>
  <div class="wizard center-content">
    <div class="stage-wrapper" v-for="stage in stages">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Wizard',
  props: ['stages', 'selectedStage']

}
</script>

<style lang="css">

.wizard {
  width: 100%;
  height: 100%;
}

.stage-wrapper {

}

</style>
