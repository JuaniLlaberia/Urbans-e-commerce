import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { SavedContextProvider } from './context/SavedContext.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundryPage from './pages/ErrorBoundryPage.jsx';
import { CartSlideProvider } from './context/CartSlideContext.jsx';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <CartSlideProvider>
            <SavedContextProvider>
              <ErrorBoundary FallbackComponent={ErrorBoundryPage}>
                <App />
              </ErrorBoundary>
            </SavedContextProvider>
          </CartSlideProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
