import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import Productos from './pages/Productos';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />}/>
        <Route path='/clientes' element={<Clientes />}/>
      </Routes>
    </div>
  );
}

export default App;
