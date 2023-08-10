import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { SavedContextProvider } from './context/SavedContext.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SavedContextProvider>
          <App />
        </SavedContextProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
