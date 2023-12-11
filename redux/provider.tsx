'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface GlobalStateProvider {
  children: React.ReactNode;
}

const GlobalStateProvider = ({ children }: GlobalStateProvider) => (
  <Provider store={store}>{children}</Provider>
);

export default GlobalStateProvider;
