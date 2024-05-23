import { createRoot } from 'react-dom/client';
import App from './pages/HomePage';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
