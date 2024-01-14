import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import TextInput from './components/TextInput.vue';
// import router from './router'

const app = createApp(App)

app.component('text-input', TextInput);

app.use(createPinia())
// app.use(router)

app.mount('#app')