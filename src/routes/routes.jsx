import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/LogInPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MyProfilePage from '../pages/MyProfile/MyProfilePage';
import DashboardIndex from '../pages/Dashboard/DashboardIndex';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signUp',
    element: <RegisterPage />,
  },
  {
    path: '/MyProfile',
    element: <MyProfilePage />,
  },
  {
    path: '/Dashboard',
    element: <DashboardIndex />,
  },
]);
