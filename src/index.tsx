import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider, theme } from 'antd';
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
    }}>
      <App />
    </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>
);

