import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { SignupPage } from "../Pages"

const router = createBrowserRouter ([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <SignupPage />
    },

])

export function AppRouter({ children }) {
    return <RouterProvider router={router}>{children}</RouterProvider>
}