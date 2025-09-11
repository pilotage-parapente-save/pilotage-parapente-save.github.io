import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import * as VueRouter from 'vue-router';
import Main  from '@/components/Main.vue'
import Register  from '@/components/Register.vue'
import {getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";

const app = createApp(App)

const firebaseConfig = {
  apiKey: "AIzaSyBdS7a_yu4rZaOOP2XTmrP6NozBzCXd0qE",
  authDomain: "pilotage-parapente.firebaseapp.com",
  projectId: "pilotage-parapente",
  storageBucket: "pilotage-parapente.firebasestorage.app",
  messagingSenderId: "42540911497",
  appId: "1:42540911497:web:f34827912c4bd44d512f58"
};

export const firebaseApp = initializeApp(firebaseConfig);


// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const router = VueRouter.createRouter({
            history: VueRouter.createWebHistory(),
            routes: [
                {
                    path: "/",
                    component: Register
                },
                {
                    path: "/main",
                    component: Main,
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        })
router.beforeEach((to, from, next) => {
    console.log("dans router")
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        console.log("route avec auth")
        if (getAuth(firebaseApp).currentUser){
            console.log("utilisateur ok")
            next();
        } else {
            console.log("pas d'utilisateur, redirection")
            next('/')
        }
    }else {
        console.log("route sans auth")
        next();
    }
})

app.use(router)


app.mount('#app')
