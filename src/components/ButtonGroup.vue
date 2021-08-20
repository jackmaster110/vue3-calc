<template>
  <div class="btn-group">
    <Button buttonName="x" />
    <Button buttonName="y" />
    <Button buttonName="del" @clicked="del" />
    <Button buttonName="clr" @clicked="clr" />
    <Button buttonName="e^x" @clicked="exponentiate" />
    <Button buttonName="9" @clicked="nine" />
    <Button buttonName="/" @clicked="divide" />
    <Button buttonName="*" @clicked="multiply" />
    <Button buttonName="6" @clicked="six" />
    <Button buttonName="7" @clicked="seven" />
    <Button buttonName="8" @clicked="eight" />
    <Button buttonName="-" @clicked="subtract" />
    <Button buttonName="3" @clicked="three" />
    <Button buttonName="4" @clicked="four" />
    <Button buttonName="5" @clicked="five" />
    <Button buttonName="+" @clicked="add" />
    <Button buttonName="0" @clicked="zero" />
    <Button buttonName="1" @clicked="one" />
    <Button buttonName="2" @clicked="two" />
    <Button buttonName="enter" @clicked="enter" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "./Button.vue";
import { useStore } from "../store/store";

@Options({
  props: {},
  components: {
    Button,
  },
})
export default class ButtonGroup extends Vue {
  store = useStore();

  enter(): void {
    this.store.state.entered = true;
  }

  update(): void {
    this.store.state.entered = false;
    if (eval(this.store.state.currentEquation)) {
      this.store.state.currentAnswer = eval(this.store.state.currentEquation);
    }
  }

  zero(): void {
    this.store.state.currentEquation += "0";
    this.update();
  }

  one(): void {
    this.store.state.currentEquation += "1";
    this.update();
  }

  two(): void {
    this.store.state.currentEquation += "2";
    this.update();
  }

  three(): void {
    this.store.state.currentEquation += "3";
    this.update();
  }

  four(): void {
    this.store.state.currentEquation += "4";
    this.update();
  }

  five(): void {
    this.store.state.currentEquation += "5";
    this.update();
  }

  six(): void {
    this.store.state.currentEquation += "6";
    this.update();
  }

  seven(): void {
    this.store.state.currentEquation += "7";
    this.update();
  }

  eight(): void {
    this.store.state.currentEquation += "8";
    this.update();
  }

  nine(): void {
    this.store.state.currentEquation += "9";
    this.update();
  }

  add(): void {
    this.store.state.currentEquation += " + ";
    this.update();
  }

  subtract(): void {
    this.store.state.currentEquation += " - ";
    this.update();
  }

  divide(): void {
    this.store.state.currentEquation += " / ";
    this.update();
  }

  multiply(): void {
    this.store.state.currentEquation += " * ";
    this.update();
  }

  exponentiate(): void {
    this.store.state.currentEquation += " ** ";
    this.update();
  }

  del(): void {
    this.store.state.currentEquation = this.store.state.currentEquation.slice(
      0,
      -1
    );
    this.update();
  }

  clr(): void {
    this.store.state.currentEquation = "";
    this.update();
  }
}
</script>
