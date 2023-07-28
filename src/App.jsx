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
import StoreInfo from './pages/dashboard/StoreInfo';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

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
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='categories' element={<Categories />} />
            <Route path='discounts' element={<Discounts />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
            <Route path='my-store' element={<StoreInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position='top-center'
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
