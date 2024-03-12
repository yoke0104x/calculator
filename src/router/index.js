/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-03-10 14:11:02
 */
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/RentingMachineHall.vue")
    },
    {
        path: "/plane",
        name: "plane",
        component: () => import("../pages/RentingPlane.vue")
    },
    {
        path: "/renting",
        name: "renting",
        component: () => import("../pages/Renting.vue")
    }
]
console.log(import.meta.env.BASE_URL)
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})