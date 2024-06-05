const routes = [
    {
        path: '/Ch08RestAPI/Exam01Promise',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam01Promise')
    },
    {
        path: '/Ch08RestAPI/Exam02Join',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam02Join')
    },
    {
        path: '/Ch08RestAPI/Exam03Login',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam03Login')
    },
    {
        path: '/Ch08RestAPI/Exam03Login',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam03Login')
    },
    {
        path: '/Ch08RestAPI/Exam04Board/BoardList',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardList')
    }, // 싱글파일 컴포넌트는 .vue를 안붙여도 된다. (폴더 아래 vue파일이 하나만 있는 경우)
    {
        path: '/Ch08RestAPI/Exam04Board/BoardWrite',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardWrite')
    },
    {
        path: '/Ch08RestAPI/Exam04Board/BoardRead',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardRead')
    },
    {
        path: '/Ch08RestAPI/Exam04Board/BoardUpdate',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Ch08RestAPI/Exam04Board/BoardUpdate')
    } 
];

export default routes;