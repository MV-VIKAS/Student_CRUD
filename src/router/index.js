import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentDetails from "../views/StudentDetails"
import RegistrationForm from "../views/RegistrationForm";
// import EditForm from "../views/EditForm"
import StudentProfile from "../views/StudentProfile"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: StudentDetails,
  },
  {
    path: "/form",
    name: "RegistrationForm",
    component: RegistrationForm,
  },
  {
    path: "/edit/:id",
    name: "EditForm",
    component: RegistrationForm,
  },
  {
    path: "/profile/:id",
    name: "StudentProfile",
    component: StudentProfile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
