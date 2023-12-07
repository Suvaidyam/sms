import type { FC } from 'react';
// import { Router } from 'react-router-dom';
import Router from './Router/Router'

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <>
      <Router/>
    </>
  );
}

export default App;
