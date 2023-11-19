import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHome, Client1Home, Client2Home }from './pages/Index';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
    </Routes>
  );
};

export const Client1Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Client1Home />} />
    </Routes>
  );
};

export const Client2Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Client2Home />} />
    </Routes>
  );
};

