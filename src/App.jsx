import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './componets/Greeting';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </div>
);

export default App;
