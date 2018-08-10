<template>
  <div id="orientation">
      <div class="wizard six-layer">

      </div>
      <div class="content-wrapper four-layer left-content">
        <div class="orientations-list">
          <orientation-list
          :items="items"/>
        </div>
        <div class="content">

        </div>
      </div>
  </div>
</template>

<script>
import OrientationList from "./OrientationList"

export default {
  name: 'Orientation',
  components: {
    'orientation-list': OrientationList
  },
  data: () => {
    return {
      items:[{
        id: 1,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      },{
        id: 2,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      },{
        id: 3,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      },{
        id: 4,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      },{
        id: 5,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      },{
        id: 6,
        title: "Clientes VIP podem solicitar geladeiras para sei la",
        func: "COODI",
        send: "Maurício de Souza Junior",
        content: "Por conta do feriado, as rotas foram alteradas para sei la",
        hour: "07:00"
      }]
    }
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
  border-bottom: 5px solid blue;
  box-sizing: border-box;
}

</style>
