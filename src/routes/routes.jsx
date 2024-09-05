import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/LogInPage';
import RegisterPage from '../pages/Register/RegisterPage';
import MyProfilePage from '../pages/MyProfile/MyProfilePage';
import DashboardIndex from '../pages/Dashboard/DashboardIndex';
import DashboardProducts from '../pages/Dashboard/DashboardProducts/DashboardProducts';
import DashboardSales from '../pages/Dashboard/DashboardSales/DashboardSales';
import DashboardCategories from '../pages/Dashboard/DashboardCategories/DashboardCategories';

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
  {
    path: '/Dashboard/products',
    element: <DashboardProducts />,
  },
  {
    path: '/Dashboard/categories',
    element: <DashboardCategories />,
  },
  {
    path: '/Dashboard/sales',
    element: <DashboardSales />,
  },
]);
