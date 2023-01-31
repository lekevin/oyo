import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './components/Home/Home';
import Login from './components/Login/Login';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<HomeView />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
