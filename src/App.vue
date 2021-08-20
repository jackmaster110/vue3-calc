<template>
  <div class="container">
    <Screen />
    <ButtonGroup />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Screen from "./components/Screen.vue";
import ButtonGroup from "./components/ButtonGroup.vue";

@Options({
  components: {
    Screen,
    ButtonGroup,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  position: absolute;
  display: grid;
  place-items: center;

  background-color: #bceecf;
}

.container {
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". screen screen screen ."
    ". screen screen screen ."
    ". btn-group btn-group btn-group ."
    ". btn-group btn-group btn-group ."
    ". btn-group btn-group btn-group ."
    ". btn-group btn-group btn-group ."
    ". btn-group btn-group btn-group .";
  width: 100%;
  max-width: 450px;

  .screen {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    grid-area: screen;

    background-color: #cacaca;
    padding: 4px;
    border-radius: 4px 4px 0 0;
  }

  .btn-group {
    background-color: #bceecf;
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-area: btn-group;

    .btn {
      background-color: #353535;
      border: none;
      color: white;
      min-height: 54px;
    }
  }
}
</style>
