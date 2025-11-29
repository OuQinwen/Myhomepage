import { createApp } from 'vue'
import App from './App.vue'
import poem from "@/poems.vue"
import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
    {path:"/" , component:App},
    {path:"/poems" , component:poem},
]
const router = createRouter({

    history:createWebHashHistory(),
    routes:routes
})


const app = createApp(App)
app.use(router)

app.mount('#app')
