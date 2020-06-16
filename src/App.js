import './App.css';
import React from 'react';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import RootStore from './common/RootStore';
import { history } from './utils/History';
import { Shell } from './common/Shell';

const rootStore = new RootStore();
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);

historyAdapter.observeRouterStateChanges();

function App() {
  return (
    <Provider rootStore={rootStore}> 
      <Shell />
    </Provider>
  );
}

export default App;