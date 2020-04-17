// == Import : npm
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

// == Import : local
import App from 'src/components/App';
import store from 'src/store';
import theme from './styles/theme';

// == Render
const rootComponent = (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
