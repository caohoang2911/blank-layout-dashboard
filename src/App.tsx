

import 'antd/dist/antd.variable.min.css';
import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { RouterDefine, routers, ScopeRoute } from './routes/router';

import { ConfigProvider } from 'antd';

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    console.log('hoang.33cao' + process.env.PAIN_FULL)
    ConfigProvider.config({
      theme: {
        primaryColor: theme == 'white' ?  '#a50064' : 'rgba(8, 19, 88, 0.9)' //'#00E2BE',
      },
      
    });
  },[theme])

  const renderRouter = (): React.ReactNode => {
    return routers.map((route: RouterDefine, index: number) => {
      const Layout = route.layout ? route.layout : Fragment;
      const Page = route.element;
      const RounterType = route.scope === ScopeRoute.PUBLIC ? PublicRoute : PrivateRoute
      const renderPage = <Layout><Page /></Layout>
      return <Route
        key={index}
        path={route.path}
        element={
          <RounterType>
            {renderPage}
          </RounterType>
        }
      />
    })
  }

  return (
    <ConfigProvider form={{requiredMark: false}}>
      <div className="App">
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/antd'>Antd</Link></li>
        </ul> */}
        <React.Suspense fallback={<span>Loading ..... </span>}>
          <Routes>
            {renderRouter()}
          </Routes>
        </React.Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
