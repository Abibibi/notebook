// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

// == Import : local
import App from 'src/components/App';
import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
