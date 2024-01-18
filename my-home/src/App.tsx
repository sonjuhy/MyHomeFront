import { Route, Routes } from 'react-router';
import './App.css';
import Main from './pages/mainpage';
import Sidebar from './components/sidebar';
import Light from './pages/lightpage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/light" element={<Light />} />
      </Routes>
    </div>
  );
}

export default App;
