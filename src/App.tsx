import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AppHome, ClientHome }from './pages/Index';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};

export const ClientRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientHome />} />
    </Routes>
  );
};
