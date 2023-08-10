import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import NotFound from './pages/NotFound';
import Styles from './styles/Styles';
import ProtectedRoute from './features/Authentication/ProtectedRoute';
import { lazy, Suspense } from 'react';
import FullScreenSpinner from './components/FullScreenSpinner';
import StoreLayout from './pages/store/StoreLayout';
import StoreProducts from './pages/store/StoreProducts';
import Product from './pages/store/Product';
import StoreOrder from './pages/store/StoreOrder';
import SavedProducts from './pages/store/SavedProducts';

const Home = lazy(() => import('./pages/store/Home'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/dashboard/AppLayout'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Products = lazy(() => import('./pages/dashboard/Products'));
const ProductDetails = lazy(() => import('./features/Products/ProductDetails'));
const Orders = lazy(() => import('./pages/dashboard/Orders'));
const OrderDetails = lazy(() => import('./features/Orders/OrderDetails'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));
const NewUser = lazy(() => import('./pages/dashboard/NewUser'));
const Discounts = lazy(() => import('./pages/dashboard/Discounts'));
const Tickets = lazy(() => import('./pages/dashboard/Tickets'));
const Categories = lazy(() => import('./pages/dashboard/Categories'));
const Stock = lazy(() => import('./pages/dashboard/Stock'));
const Cart = lazy(() => import('./pages/store/Cart'));

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
        <Suspense fallback={<FullScreenSpinner />}>
          <Routes>
            <Route element={<StoreLayout />}>
              <Route path='/' element={<Home />} />
              <Route
                path='/products/:mainCategory'
                element={<StoreProducts />}
              />
              <Route path='/products/saved' element={<SavedProducts />} />
              <Route
                path='/product/details/:productSKU'
                element={<Product />}
              />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order/track' element={<StoreOrder />} />
            </Route>
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
              <Route path='admin/stock' element={<Stock />} />
              <Route path='admin/products' element={<Products />} />
              <Route
                path='admin/products/variants/:productName'
                element={<ProductDetails />}
              />
            </Route>
          </Routes>
        </Suspense>
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
