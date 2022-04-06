import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroDetails from './pages/HeroDetails/HeroDetails';
import Heroes from './pages/Heroes/Heroes';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Main />} />
      <Route path="/heroes" element={ <Heroes />} />
      <Route path="/heroes/:id" element={ <HeroDetails />} />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
