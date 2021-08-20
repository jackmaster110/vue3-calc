<template>
  <div class="screen">
    <h1 class="current">
      {{
        store.state.entered
          ? store.state.currentAnswer
          : store.state.currentEquation
      }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "../store/store";

@Options({
  props: {},
})
export default class Screen extends Vue {
  store = useStore();
}
</script>
