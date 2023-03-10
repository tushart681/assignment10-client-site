import { createBrowserRouter } from "react-router-dom";
import Login from "../form/login/Login";
import Register from "../form/register/Register";
import Main from "../layout/Main";
import Blog from "../pages/blogs/Blog";
import Category from "../pages/category/Category";
import Course from "../pages/Course/Course";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import Home from "../pages/home/Home";
import PrivateRoute from "./privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment10-server-site-snowy.vercel.app/premium-course')
            },
            {
                path:'category',
                element: <Category></Category>,
                loader: () => fetch(`https://assignment10-server-site-snowy.vercel.app/all-course`)
            },
            {
                path:'corse-details/:id',
                element: <PrivateRoute><CourseDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-site-snowy.vercel.app/course-detail/${params.id}`)
            },
            {
                path:'/Course',
                element: <Course></Course>
            },
            {
                path: '/form/register',
                element: <Register></Register>
            },
            {
                path: '/form/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blog />
            },
            
        ]
    }

])