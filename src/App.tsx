import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainDashboard from '@src/pages/MainDashboard';
import OsongDashboard from '@src/pages/OsongDashboard';
import NotFound from '@src/pages/MainDashboard';
import { Global } from '@emotion/react';
import reset from '@src/style/reset';
import common from '@src/style/common';

function App() {
  return (
    <div className="App">
      <Global styles={[common, reset]} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard/>}></Route>
          <Route path="/osong" element={<OsongDashboard/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
