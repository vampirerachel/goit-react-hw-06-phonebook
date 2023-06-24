import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store'; // Import only persistor from './store'
import App from 'components/App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

console.log('Persistor:', persistor); // Log the persistor object
