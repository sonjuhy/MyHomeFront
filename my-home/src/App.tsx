import { Route, Routes } from 'react-router';
import './App.css';
import Main from './pages/mainpage';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
