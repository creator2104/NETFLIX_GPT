import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's <div id='root'></div> in your index.html");
}

createRoot(rootElement).render(
    <App />
);
