import Router from 'vue-router'

import Home from './pages/Home.vue';
import Languages from './pages/Language/Index.vue';
import LanguageAdd from './pages/Language/EditForm.vue';
import Levels from './pages/Level/Index.vue';
import LevelAdd from './pages/Level/EditForm.vue';
import Profiles from './pages/Profile.vue';
import UserAdd from './pages/UserAdd.vue';
import Lessons from './pages/Lessons/Index.vue';
import LessonAdd from './pages/Lessons/EditForm.vue';

const prefix = ''
export default new Router({
    mode: 'history',
    routes: [
        {path: prefix+'/',
            component: Home, name: 'index'},
        {path: prefix+'/users',
            component: Profiles, name: 'users'},
        {path: prefix+'/users/add',
            component: UserAdd, name: 'users.add'},

        {path: prefix+'/languages/',
            component: Languages, name: 'languages'},
        {path: prefix+'/languages/add',
            component: LanguageAdd, name: 'language.add'},
        {path: prefix+'/languages/edit/:id',
            component: LanguageAdd, name: 'language.edit'},
        {path: prefix+'/levels/:id',
            component: Levels, name: 'levels'},
        {path: prefix+'/levels/:id/add/',
            component: LevelAdd, name: 'level.add'},
        {path: prefix+'/levels/:id/edit/:id_level',
            component: LevelAdd, name: 'level.edit'},

        {path: prefix+'/level/:id/lessons',
            component: Lessons, name: 'lessons'},
        {path: prefix+'/level/:id/lessons/add',
            component: LessonAdd, name: 'lessons.add'},

        // {path: prefix+'/tasks/',
        //     component: LessonAdd, name: 'lessons.add'},

        //
        // {path: prefix+'/404', name: '404',
        //     component: NotFound,
        // },
        // {path: prefix+'/development', name: 'index',
        //     component: inDev,
        // },
        // { path: '*',
        //     redirect: prefix+'/404'
        // }

    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})