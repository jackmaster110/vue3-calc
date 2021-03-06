import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { store, key } from "./store/store";

const app = createApp(App);

app.use(store, key);

app.mount("#app");
