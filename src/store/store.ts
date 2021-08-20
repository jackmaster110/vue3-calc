import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  currentEquation: string;
  currentAnswer: number;
  entered: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    currentEquation: "",
    currentAnswer: 0,
    entered: false,
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
