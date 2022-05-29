import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './components/context/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <AuthProvider>
                        <App />
                </AuthProvider>
        </BrowserRouter>
);
