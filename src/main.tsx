import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioPage from '@/components/portfolio-page';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
);
