import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AppLayout from './pages/dashboard/AppLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Categories from './pages/dashboard/Categories';
import Discounts from './pages/dashboard/Discounts';
import Orders from './pages/dashboard/Orders';
import Products from './pages/dashboard/Products';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Styles from './styles/Styles';
import ProductDetails from './features/Products/ProductDetails';
import OrderDetails from './features/Orders/OrderDetails';
import Tickets from './pages/dashboard/Tickets';
import Settings from './pages/dashboard/Settings';
import Home from './pages/store/Home';
import ProtectedRoute from './features/Authentication/ProtectedRoute';
import NewUser from './pages/dashboard/NewUser';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Styles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path='/admin'
              element={<Navigate replace to='/admin/dashboard' />}
            />
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/categories' element={<Categories />} />
            <Route path='/admin/discounts' element={<Discounts />} />
            <Route path='/admin/orders' element={<Orders />} />
            <Route
              path='admin/order/details/:orderId'
              element={<OrderDetails />}
            />
            <Route path='/admin/new-user' element={<NewUser />} />
            <Route path='/admin/tickets' element={<Tickets />} />
            <Route path='/admin/my-store' element={<Settings />} />
            <Route path='admin/products' element={<Products />} />
            <Route
              path='admin/products/variants/:productName'
              element={<ProductDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position='bottom-right'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
