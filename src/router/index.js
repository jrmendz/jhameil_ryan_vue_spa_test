import Vue from 'vue'
import Router from 'vue-router'
import UsersComponent from '@/components/UsersComponent'
import UserDetailsComponent from '@/components/UserDetailsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userList',
      component: UsersComponent
    },
    {
      path: '/user-details/:id',
      name: 'userDetails',
      component: UserDetailsComponent
    }
  ]
})
