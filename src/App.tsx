import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Project from './pages/project/project';
import Chart from './pages/chart/chart';

import MainLayout from './layouts/main-layout/main-layout';

const App: React.FC = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout><Project /></MainLayout>} />
          <Route path="/project/:projectId/chart" element={<MainLayout><Chart /></MainLayout>} />
        </Routes>
    </>
  );
};

export default App;
