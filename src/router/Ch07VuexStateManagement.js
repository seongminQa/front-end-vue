const routes = [
    {
        path: '/Ch07VuexStateManagement/Exam01RootState.vue',
        component: () => import(/* webpackChunkName: "Ch07VuexStateManagement" */ '@/views/Ch07VuexStateManagement/Exam01RootState.vue')
    },
    {
        path: '/Ch07VuexStateManagement/Exam02CounterState.vue',
        component: () => import(/* webpackChunkName: "Ch07VuexStateManagement" */ '@/views/Ch07VuexStateManagement/Exam02CounterState.vue')
    }
];

export default routes;