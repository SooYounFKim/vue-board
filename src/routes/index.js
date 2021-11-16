import Vue from 'vue';
import Router from 'vue-router';
//import HelloWorld from '@/components/HelloWorld';
import List from '@/components/board/List';
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            // name: HelloWorld,
            // component:HelloWorld
            name: 'index',
            component: Index
        },
        {
            path: '/:id',
            name: 'show',
            component: Show
        },
        {
            path:'/board/list',
            name:List,
            component:List
        }
    ]
})