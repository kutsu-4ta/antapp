import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Link, Router } from 'components/Router';
import Styled from 'styled-components';
import Dynamic from 'containers/Dynamic';
import Navbar from './components/Navbar';
import Loading from "./components/Loading";
import Page from './components/page';

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
      <Root>
          <Page/>
          <Navbar/>
          <React.Suspense fallback={<Loading />}>
              <Router>
                  <Dynamic path="dynamic"/>
                  <Routes path="*"/>
              </Router>
          </React.Suspense>
      </Root>
  )
}

export default App
