import { Route, Routes } from 'react-router';
import './App.css';
import Main from './pages/mainpage';
import Sidebar from './components/sidebar';
import Light from './pages/lightpage';
import Weather from './pages/weatherpage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/light" element={<Light />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
