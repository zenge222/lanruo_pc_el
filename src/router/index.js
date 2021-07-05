import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/index'
import CollegeProfile from '@/components/collegeProfile'
import CurriculumDesign from '@/components/curriculumDesign'
import SuperiorResources from '@/components/superiorResources'
import PromoteDevelop from '@/components/promoteDevelop'
import DevPlan from '@/components/devPlan'
import ContactUs from '@/components/contactUs'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: '/home',
            meta: {
                title: '蓝若',
            },
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home,
                    meta: {
                        title: '首页',
                    }
                },
                {
                    path: '/collegeProfile',
                    name: 'CollegeProfile',
                    component: CollegeProfile,
                    meta: {
                        title: '学院简介',
                    }
                },
                {
                    path: '/curriculumDesign',
                    name: 'CurriculumDesign',
                    component: CurriculumDesign,
                    meta: {
                        title: '课程设置',
                    }
                },
                {
                    path: '/superiorResources',
                    name: 'SuperiorResources',
                    component: SuperiorResources,
                    meta: {
                        title: '优势资源',
                    }
                },
                {
                    path: '/promoteDevelop',
                    name: 'PromoteDevelop',
                    component: PromoteDevelop,
                    meta: {
                        title: '晋升发展',
                    }
                },
                {
                    path: '/devPlan',
                    name: 'DevPlan',
                    component: DevPlan,
                    meta: {
                        title: '发展规划',
                    }
                },
                {
                    path: '/contactUs',
                    name: 'ContactUs',
                    component: ContactUs,
                    meta: {
                        title: '联系我们',
                    }
                },
            ]
        }
    ],
    // mode: 'history',
    // history: true,
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}