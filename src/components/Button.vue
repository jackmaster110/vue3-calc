<template>
  <button @click="() => this.$emit('clicked')" class="btn">
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    buttonName: String,
  },
})
export default class Button extends Vue {}
</script>
